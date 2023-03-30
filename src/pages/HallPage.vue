<template>
  <div class="page">
    <div class="page__banner" v-if="banner !== null" />
    <div class="container" v-if="hallId !== null">
      <div class="page__side">
        <div class="page__side-ad" />
        <h4>Watch today</h4>
        <div class="page__side-schedule">
          <router-link class="event" v-for="event in schedule" :key="event.id" :to="customRoute(event.name)">
            {{ movieTitle(event.selectedMovie) }}
          </router-link>
        </div>
        <router-link class="btn btn-block btn-outline-light" to="/schedule">
          Schedule
        </router-link>
      </div>
      <div class="hall">
        <h1 class="text-center">{{ title }}</h1>
        <p>{{ description }}</p>
        <img class="hall__scheme" :src="scheme" alt="">
        <GallerySwiper
            v-if="gallery.length > 0"
            :gallery="gallery"
        />
      </div>
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Hall not found</h2>
        <router-link :to="`/cinemas/${title}`">
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


const props = defineProps(['title', 'hall']);
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

const hallId = computed(() => {
  let hallId = null;
  if (id.value !== null) {
    cinemaStore.cinemaList[id.value].halls.forEach((hall, index) => {
      if (hall.data[0].title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.hall) {
        hallId = index;
      }
    });
  }
  return hallId;
});

const banner = computed(() => {
  let banner = null;
  if (hallId.value !== null && cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].banner.url !== null) {
    banner = `url("${cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].banner.url}")`;
  }
  return banner;
});

const title = computed(() => {
  let title = null;
  if (hallId.value !== null) {
    title = cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].title;
  }
  return title;
});

const description = computed(() => {
  let description = null;
  if (hallId.value !== null) {
    description = cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].description;
  }
  return description;
});

const scheme = computed(() => {
  let scheme = null;
  if (hallId.value !== null) {
    scheme = cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].scheme.url;
  }
  return scheme
});

const gallery = computed(() => {
  let gallery = [];
  if (hallId.value !== null) {
    gallery = cinemaStore.cinemaList[id.value].halls[hallId.value].data[mainStore.currentLanguage.index].gallery;
  }
  return gallery;
});

const schedule = computed(() => {
  let schedule = [];
  let date = new Date().setHours(0,0,0,0);
  if (id.value !== null) {
    schedule = scheduleStore.scheduledEvents.filter((event) => date === new Date(event.start).setHours(0, 0, 0, 0) && event.selectedCinema.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.title && event.selectedHall.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.hall);
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
function customRoute(name) {
  return '/schedule/' + name.replace('event-', '');
}

</script>

<script>
export default {
  name: "HallPage"
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

.page__side-schedule {
  display: flex;
  flex-direction: column;
  border: 1px solid wheat;
  margin-bottom: 2rem;
}
.event {
  border: 1px solid wheat;
  padding: 5px 10px;
}

.hall {
  width: 100%;
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