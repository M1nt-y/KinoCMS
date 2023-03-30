<template>
  <div class="page">
    <div class="page__banner" v-if="banner !== null" />
    <div class="container" v-if="id !== null">
      <div class="page__side">
        <div class="page__side-ad" />
        <h4>Halls: {{ halls.length }}</h4>
        <div class="page__side-halls">
          <router-link class="hall" v-for="hall in halls" :key="hall.id" :to="customRoute(hall.data[0].title, title)">
            {{ hall.data[mainStore.currentLanguage.index].title }}
          </router-link>
        </div>
        <h4>Watch today</h4>
        <div class="page__side-schedule">
          <router-link class="event" v-for="event in schedule" :key="event.id" :to="customRoute(event.name, '/schedule/')">
            {{ movieTitle(event.selectedMovie) }}
          </router-link>
        </div>
        <router-link class="btn btn-block btn-outline-light" to="/schedule">
          Schedule
        </router-link>
      </div>
      <div class="cinema">
        <h1>{{ title }}</h1>
        <img class="cinema__img" :src="logo" alt="">
        <p>{{ description }}</p>
        <h2 class="text-center">Conditions</h2>
        <p>{{ conditions }}</p>
        <GallerySwiper
            v-if="gallery.length > 0"
            :gallery="gallery"
        />
      </div>
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Cinema not found</h2>
        <router-link to="/cinemas">
          Go back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useMainStore} from "@/stores/main";
import {useMovieStore} from "@/stores/movies";
import {useCinemaStore} from "@/stores/cinemas";
import {useScheduleStore} from "@/stores/schedule";
import GallerySwiper from "@/components/GallerySwiper";


const props = defineProps(['title']);
const mainStore = useMainStore();
const movieStore = useMovieStore();
const cinemaStore = useCinemaStore();
const scheduleStore = useScheduleStore();
movieStore.getMovies();
cinemaStore.getCinemas();
scheduleStore.getSchedule();


const id = computed(() => {
  let id = null;
  cinemaStore.cinemaList.forEach((cinema, index) => {
    if (cinema.data[0].title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.title) {
      id = index;
    }
  });
  return id;
});

const banner = computed(() => {
  let banner = null;
  if (id.value !== null && cinemaStore.cinemaList[id.value].images[mainStore.currentLanguage.index].banner.url !== null) {
    banner = `url("${cinemaStore.cinemaList[id.value].images[mainStore.currentLanguage.index].banner.url}")`;
  }
  return banner;
});

const title = computed(() => {
  if (id.value !== null) {
    return cinemaStore.cinemaList[id.value].data[mainStore.currentLanguage.index].title;
  }
  else {
    return null;
  }
});

const logo = computed(() => {
  if (id.value !== null) {
    return cinemaStore.cinemaList[id.value].images[mainStore.currentLanguage.index].logo.url;
  }
  else {
    return null;
  }
});

const description = computed(() => {
  let description = null;
  if (id.value !== null) {
    description = cinemaStore.cinemaList[id.value].data[mainStore.currentLanguage.index].description;
  }
  return description;
});

const conditions = computed(() => {
  let conditions = null;
  if (id.value !== null) {
    conditions = cinemaStore.cinemaList[id.value].data[mainStore.currentLanguage.index].conditions;
  }
  return conditions;
});

const gallery = computed(() => {
  let gallery = [];
  if (id.value !== null) {
    gallery = cinemaStore.cinemaList[id.value].data[mainStore.currentLanguage.index].gallery;
  }
  return gallery;
});

const halls = computed(() => {
  let halls = [];
  if (id.value !== null) {
    halls = cinemaStore.cinemaList[id.value].halls;
  }
  return halls;
});

const schedule = computed(() => {
  let schedule = [];
  let date = new Date().setHours(0,0,0,0);
  if (id.value !== null) {
    schedule = scheduleStore.scheduledEvents.filter((event) => date === new Date(event.start).setHours(0, 0, 0, 0) && event.selectedCinema.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.title);
  }
  return schedule;
});

function movieTitle(title) {
  let movieTitle = title;
  movieStore.movieList.forEach((movie) => {
    if (movie.data[0].title === title) {
      movieTitle = movie.data[mainStore.currentLanguage.index].title;
    }
  });
  return movieTitle;
}
function customRoute(name, route) {
  if (route.includes('schedule')) {
    return route + name.replace('event-', '');
  }
  else {
    return route.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') + '/' + name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-')
  }
}
</script>

<script>
export default {
  name: "CinemaPage"
}
</script>

<style scoped>
.page .container {
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
}


.page__side {
  margin-right: 3rem;
}
.page__side-ad {
  border: 1px solid wheat;
  width: 200px;
  height: 400px;
  margin-bottom: 2rem;
}
.page__side-halls,
.page__side-schedule {
  display: flex;
  flex-direction: column;
  border: 1px solid wheat;
  margin-bottom: 2rem;
}
.hall, .event {
  border: 1px solid wheat;
  padding: 5px 10px;
}


.cinema__img {
  max-width: 360px;
}

.gallery {
  max-width: 890px;
  margin-bottom: 2rem;
}

.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}
.page__notfound .container {
  flex-direction: column;
}
</style>