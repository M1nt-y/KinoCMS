<template>
  <div class="event-modal" @click="$emit('closeModal')" v-show="show">
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Create event</h2>
          <button class="close" @click="$emit('closeModal')">
            <span>×</span>
          </button>
        </div>
        <div class="modal-body">

          <VueDatePicker
              v-model="date"
              :disabled="selectedDate !== null"
              :enable-time-picker="false"
              placeholder="Select Date"
          />

          <VueDatePicker
              v-model="time"
              time-picker
              placeholder="Select Time"
          />

          <div class="modal-body__item">
            <p>Cinema: </p>
            <select class="form-control" v-model="scheduleStore.selectedCinema">
              <option disabled :value="null">Select cinema</option>
              <option v-for="cinema in cinemaStore.cinemaList" :key="cinema.id">{{ cinema.data[0].title }}</option>
            </select>
          </div>

          <div class="modal-body__item">
            <p>Hall: </p>
            <select class="form-control" v-if="cinemaID === null" v-model="scheduleStore.selectedHall" disabled>
              <option disabled :value="null">Select hall</option>
            </select>
            <select class="form-control" v-model="scheduleStore.selectedHall" v-else>
              <option disabled :value="null">Select hall</option>
              <option v-for="hall in cinemaStore.cinemaList[cinemaID].halls" :key="hall.id">{{ hall.data[0].title }}</option>
            </select>
          </div>

          <div class="modal-body__item">
            <p>Movie: </p>
            <select class="form-control" v-model="scheduleStore.selectedMovie" :disabled="scheduleStore.selectedHall === null">
              <option disabled :value="null">Select movie</option>
              <option v-for="movie in movieStore.movieList" :key="movie.id">{{ movie.data[0].title }}</option>
            </select>
          </div>

          <div class="modal-body__item">
            <p>Price: </p>
            <input class="form-control" type="number" v-model="scheduleStore.moviePrice">
          </div>

        </div>
        <div class="modal-footer justify-content-between">
          <button class="btn btn-danger" @click="$emit('deleteEvent')">Delete event</button>
          <button class="btn btn-primary" @click="saveChanges">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useScheduleStore} from "@/stores/schedule";
import {useCinemaStore} from "@/stores/cinemas";
import {useMovieStore} from "@/stores/movies";
import {ref, computed, watch} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const scheduleStore = useScheduleStore();
const cinemaStore = useCinemaStore();
const movieStore = useMovieStore();
cinemaStore.getCinemas();
movieStore.getMovies();


const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  selectedDate: {
    type: String,
    default: ''
  },
  selectedId: {
    type: String,
    default: null
  }
});

const emits = defineEmits(['closeModal','addEvent', 'deleteEvent']);

const date = ref(new Date());
const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});

watch(() => props.show,(value, oldValue) => {
  if (value !== oldValue) {
    if (props.selectedDate !== null) {
      date.value = props.selectedDate;
      if (props.selectedId !== null) {
        let id = Number(props.selectedId);
        time.value = {
          hours: new Date(scheduleStore.scheduledEvents[id].start).getHours(),
          minutes: new Date(scheduleStore.scheduledEvents[id].start).getMinutes(),
        }
      }
    }
    else {
      date.value = time.value = null;
    }
  }
})

const cinemaID = computed(() => {
  let id = null;
  if (scheduleStore.selectedCinema !== '') {
    cinemaStore.cinemaList.forEach((cinema) => {
      if (cinema.data[0].title === scheduleStore.selectedCinema) {
        id = cinema.id;
      }
    });
  }
  return id;
});
watch(() => scheduleStore.selectedCinema, (value, oldValue) => {
  if (value !== oldValue && props.selectedId === null) {
    scheduleStore.selectedHall = null;
  }
});

function saveChanges() {
  if (typeof date.value === "object") {
    date.value = date.value.toISOString().split('T')[0];
  }
  scheduleStore.eventDate = new Date(Date.parse(`${date.value} ${time.value.hours}:${time.value.minutes}:00+0200`)).getTime();
  emits('addEvent');
}

</script>

<script>
export default {
  name: "EventModal"
}
</script>

<style scoped>
.event-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-dialog {
  width: 100%;
}
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-body__item {
  display: flex;
  gap: 10px;
  align-items: center;
}

.modal-body__item select,
.modal-body__item input {
  width: 100%;
}

.modal-body__item p {
  width: 25%;
  margin: 0;
}
</style>