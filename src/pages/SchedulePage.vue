<template>
  <div class="page schedule">
    <div class="container">
      <div class="schedule__filters">
        <select class="form-control schedule__filter" v-model="selectedCinema">
          <option value="">All cinemas</option>
          <option v-for="cinema in cinemaStore.cinemaList" :key="cinema.id" :value="cinema.data[0].title">
            {{ cinema.data[mainStore.currentLanguage.index].title }}
          </option>
        </select>

        <Datepicker
            class="schedule__filter"
            :placeholder="$t('placeholders.date')"
            v-model="selectedDate"
            :enable-time-picker="false"
            close-on-scroll
        />

        <select class="form-control schedule__filter" v-model="selectedMovie">
          <option value="">All movies</option>
          <option v-for="movie in movieStore.movieList" :key="movie.id" :value="movie.data[0].title">
            {{ movie.data[mainStore.currentLanguage.index].title }}
          </option>
        </select>
        <select class="form-control schedule__filter" v-model="selectedHall" v-if="cinemaID === null" disabled>
          <option value="">All halls</option>
        </select>
        <select class="form-control schedule__filter" v-model="selectedHall" v-else>
          <option disabled value="">Please select one</option>
          <option v-for="hall in cinemaStore.cinemaList[cinemaID].halls" :key="hall.id" :value="hall.data[0].title">
            {{ hall.data[mainStore.currentLanguage.index].title }}
          </option>
        </select>
      </div>

      <table class="table" v-if="sortedEvents.length">
        <thead>
        <tr>
          <th class="table__item table__column">Time</th>
          <th class="table__item table__column">Movie</th>
          <th class="table__item table__column">Hall</th>
          <th class="table__item table__column">Price</th>
          <th class="table__item table__column">Book a ticket</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="event in sortedEvents" :key="event.id">
          <td class="table__item">{{ displayTime(event.start) }}</td>
          <td class="table__item">{{ movieTitle(event.selectedMovie) }}</td>
          <td class="table__item">{{ hallTitle(event.selectedHall) }}</td>
          <td class="table__item">{{ event.moviePrice }}</td>
          <td>
            <router-link :to="customRoute(event.name)">
              Go to page
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
      <p v-else>No events for selected filters</p>
    </div>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import {useCinemaStore} from "@/stores/cinemas";
import {useMainStore} from "@/stores/main";
import {useScheduleStore} from "@/stores/schedule";
import {useMovieStore} from "@/stores/movies";
import {computed, ref, watch} from "vue";


const mainStore = useMainStore();
const scheduleStore = useScheduleStore();
const cinemaStore = useCinemaStore();
const movieStore = useMovieStore();

scheduleStore.getSchedule();
cinemaStore.getCinemas();
movieStore.getMovies();


const selectedCinema = ref("");
const selectedDate = ref(new Date());
const selectedMovie = ref("");
const selectedHall = ref("");

const cinemaID = computed(() => {
  let id = null;
  if (selectedCinema.value !== '') {
    cinemaStore.cinemaList.forEach((cinema) => {
      if (cinema.data[0].title === selectedCinema.value) {
        id = cinema.id;
      }
    });
  }
  return id;
});

watch(() => selectedCinema.value, () => {
  selectedHall.value = "";
});

const filteredByCinema = computed(() => {
  if (selectedCinema.value !== '') {
    return scheduleStore.scheduledEvents.filter(event => event.selectedCinema === selectedCinema.value);
  }
  else {
    return scheduleStore.scheduledEvents;
  }
});
const filteredByHall = computed(() => {
  if (selectedHall.value !== '') {
    return filteredByCinema.value.filter(event => event.selectedHall === selectedHall.value)
  }
  else {
    return filteredByCinema.value;
  }
});
const filteredByMovie = computed(() => {
  if (selectedMovie.value !== '') {
    return filteredByHall.value.filter(event => event.selectedMovie === selectedMovie.value);
  }
  else {
    return filteredByHall.value;
  }
});
const filteredByDate = computed(() => {
  if (selectedDate.value) {
    return filteredByMovie.value.filter(event => new Date(event.start).setHours(0, 0, 0, 0) === new Date(selectedDate.value).setHours(0, 0, 0, 0));
  }
  else {
    return filteredByMovie.value;
  }
});
const sortedEvents = computed(() => {
  let array = filteredByDate.value;
  return array.sort((a, b) => a.start - b.start);
});

function displayTime(date) {
  let hours = new Date(date).getHours();
  let minutes = new Date(date).getMinutes();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  return hours + ':' + minutes;
}

function movieTitle(title) {
  let movieTitle = title;
  movieStore.movieList.forEach((movie) => {
    if (movie.data[0].title === title) {
      movieTitle = movie.data[mainStore.currentLanguage.index].title;
    }
  });
  return movieTitle;
}

function hallTitle(title) {
  let hallTitle = title;
  cinemaStore.cinemaList.forEach((cinema) => {
    cinema.halls.forEach((hall) => {
      if (hall.data[0].title === title) {
        hallTitle = hall.data[mainStore.currentLanguage.index].title;
      }
    });
  });
  return hallTitle;
}

function customRoute(name) {
  return 'schedule/' + name.replace('event-', '');
}
</script>

<script>
export default {
  name: "SchedulePage"
}
</script>

<style scoped>
.schedule__filters {
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
}
.schedule__filter {
  width: 20%;
  margin-left: 1rem;
}
</style>