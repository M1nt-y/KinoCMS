<template>
  <div class="page">
    <div class="container" v-if="eventId !== null">
      <div class="event">
        <div class="event__info">
          <img class="event__info-img"
               :src="movieStore.movieList[movieId].data[mainStore.currentLanguage.index].main.url"
               alt="" v-if="movieId !== null"
          >
          <div class="page__ad-vert" />
        </div>

        <div class="event__booking" v-if="movieId !== null && cinemaId !== null && hallId !== null">
          <h2>{{ movieStore.movieList[movieId].data[mainStore.currentLanguage.index].title }}</h2>
          <div class="event__booking-showcase">
            <div class="event__booking-info">
              <p>{{ displayDate(scheduleStore.scheduledEvents[eventId].start) }}</p>
              <p>{{ cinemaStore.cinemaList[cinemaId].halls[hallId].data[mainStore.currentLanguage.index].title }}</p>
              <p>Price: {{ scheduleStore.scheduledEvents[eventId].moviePrice }}</p>
            </div>
            <div class="seat-example" v-for="(value, key) in seatStates" :key="key">
              <div class="seat" :style="{'backgroundColor': value.color}" />
              <div class="text">{{ value.text }}</div>
            </div>
            <div class="event__booking-order">
              <span>Your order: </span>
              <span>Tickets: {{ tickets }}</span>
              <span>Price: {{ price }}</span>
            </div>
          </div>
          <div class="event__booking-screen" />

          <div class="event__booking-seats">
            <div class="row" v-for="(row, index) in hall" :key="index">
              <p>Row {{ index+1 }}</p>
              <div class="seats">
                <div class="seat" v-for="seat in row" :key="seat.id" :style="{'backgroundColor': seatType(seat)}" @click="selectSeat(index+1, seat.id)">
                  <p>{{ seat.id }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="event__booking-buttons">
            <button class="btn btn-outline-light btn-lg mr-3" @click="reserveTickets">Reserve</button>
            <button class="btn btn-outline-success btn-lg" @click="buyTickets">Buy</button>
          </div>

        </div>
      </div>
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Event not found</h2>
        <router-link to="/schedule">
          Go back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/main";
import {useScheduleStore} from "@/stores/schedule";
import {useCinemaStore} from "@/stores/cinemas";
import {useMovieStore} from "@/stores/movies";
import {computed, onBeforeMount, ref} from "vue";
import {useAuthStore} from "@/stores/auth";


const props = defineProps(['id']);
const hall = ref([]);

const mainStore = useMainStore();
const scheduleStore = useScheduleStore();
const cinemaStore = useCinemaStore();
const movieStore = useMovieStore();
const authStore = useAuthStore();
scheduleStore.getSchedule();
cinemaStore.getCinemas();
movieStore.getMovies();

onBeforeMount(() => {
  mainStore.getBooking(props.id).then((res) => {
    if (res) {
      hall.value = Object.values(res);
    }
    else {
      for (let i = 1; i<=9; i++) {
        hall.value.push([]);
        for (let j = 1; j<=20; j++) {
          hall.value[i-1].push({
            id: j,
            type: 'Available'
          });
        }
      }
    }
  });
})


const eventId = computed(() => {
  let eventId = null;
  scheduleStore.scheduledEvents.forEach((event, index) => {
    if (event.name.includes(props.id)) {
      eventId = index;
    }
  });
  return eventId;
});
const movieId = computed(() => {
  let movieId = null;
  if (eventId.value !== null) {
    movieStore.movieList.forEach((movie, index) => {
      if (movie.data[0].title === scheduleStore.scheduledEvents[eventId.value].selectedMovie) {
        movieId = index;
      }
    });
  }
  return movieId;
});
const cinemaId = computed(() => {
  let cinemaId = null;
  if (eventId.value !== null) {
    cinemaStore.cinemaList.forEach((cinema, index) => {
      if (cinema.data[0].title === scheduleStore.scheduledEvents[eventId.value].selectedCinema) {
        cinemaId = index;
      }
    });
  }
  return cinemaId;
});
const hallId = computed(() => {
  let hallId = null;
  if (eventId.value !== null) {
    cinemaStore.cinemaList[cinemaId.value].halls.forEach((hall, index) => {
      if (hall.data[0].title === scheduleStore.scheduledEvents[eventId.value].selectedHall) {
        hallId = index;
      }
    });
  }
  return hallId;
});

function displayDate(date) {
  let dd = new Date(date).getDate();
  let mm = new Date(date).getMonth() + 1;
  let yyyy = new Date(date).getFullYear();
  let hh = new Date(date).getHours();
  let min = new Date(date).getMinutes();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '.' + mm + '.' + yyyy + ', ' + hh + ':' + min;
}


const seatStates = ref([
  {
    text: 'Available',
    color: '#67C23A'
  },
  {
    text: 'Selected',
    color: '#4080D6'
  },
  {
    text: 'Booked',
    color: '#F1C40F'
  },
  {
    text: 'Sold',
    color: '#E74C3C'
  }
]);

function seatType(seat) {
  let color = null;
  seatStates.value.forEach((state) => {
    if (seat.type === state.text) {
      color = state.color;
    }
  });
  return color;
}
const tickets = ref(0);
const price = ref(0);
function selectSeat(row, seat) {
  if (hall.value[row-1][seat-1].type === 'Available') {
    hall.value[row-1][seat-1].type = 'Selected';
    tickets.value++;
    price.value += scheduleStore.scheduledEvents[eventId.value].moviePrice;
  }
  else if (hall.value[row-1][seat-1].type === 'Selected') {
    hall.value[row-1][seat-1].type = 'Available';
    tickets.value--;
    price.value -= scheduleStore.scheduledEvents[eventId.value].moviePrice;
  }
  console.log(row, seat);
}

function reserveTickets() {
  hall.value.forEach((row) => {
    row.forEach((seat) => {
      if (seat.type === 'Selected') {
        seat.type = 'Booked';
        seat.email = authStore.currentUser.email;
      }
    })
  });
  mainStore.updateBooking(props.id, hall.value)
}
function buyTickets() {
  hall.value.forEach((row) => {
    row.forEach((seat) => {
      if (seat.type === 'Selected') {
        seat.type = 'Sold';
        seat.email = authStore.currentUser.email;
      }
    })
  });
  mainStore.updateBooking(props.id, hall.value);
}
</script>

<script>
export default {
  name: "BookingPage"
}
</script>

<style scoped>
.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

.event {
  display: flex;
}
.event__info {
  margin-right: 3rem;
}
.event__info-img {
  max-width: 225px;
}

.page__ad-vert {
  margin-top: 2rem;
  border: 1px solid #FFC107;
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
}

.event__booking {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.event__booking-info {
  margin-right: 1rem;
}
.event__booking-info p {
  margin-bottom: 5px;
}
.event__booking-showcase {
  display: flex;
  align-items: center;
}
.event__booking-order span {
  margin-left: 2rem;
}

.seat-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
}

.row {
  justify-content: space-between;
}
.seats {
  display: flex;
}

.seat {
  height: 26px;
  width: 32px;
  margin: 3px;
  font-size: 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}
.seat p {
  margin: 0;
}

.event__booking-screen {
  max-width: 760px;
  width: 100%;
  background-color: #fff;
  height: 10px;
  margin: 1rem 0 3rem auto;
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}
.event__booking-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
</style>