<template>
  <div class="page">
    <MainSwiper
        :gallery="bannersStore.movieBanners.data"
        :rotation="bannersStore.movieBanners.rotationSpeed"
    />

    <div class="container" v-if="todayMovies.length > 0">
      <h2 class="text-center mt-2 mb-2">{{ $t('today') }}</h2>
      <div class="movies mb-2">
        <router-link class="movie" v-for="(movie, index) in todayMovies" :key="index" :to="customRoute(movie.data[0].title, 'schedule/')">
          <img class="movie__img" :src="movie.data[mainStore.currentLanguage.index].main.url" alt="">
          <div class="movie__content">
            <p>{{ movie.data[mainStore.currentLanguage.index].title }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="container" v-if="upcomingMovies.length > 0">
      <h2 class="text-center mt-2 mb-2">{{ $t('soon') }}</h2>
      <div class="upcoming mb-2">
        <router-link class="movie" v-for="(movie, index) in upcomingMovies" :key="index" :to="customRoute(movie.data[0].title, 'upcoming/')">
          <img class="movie__img" :src="movie.data[mainStore.currentLanguage.index].main.url" alt="">
          <div class="movie__content">
            <p>{{ movie.data[mainStore.currentLanguage.index].title }}</p>
            <p class="movie__content-date">{{ displayDate(movie.data[mainStore.currentLanguage.index].screeningDate) }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center mt-2 mb-2">News and special offers</h2>
    </div>
    <MainSwiper
        :gallery="bannersStore.newsBanners.data"
        :rotation="bannersStore.newsBanners.rotationSpeed"
    />
    <div class="container">
      <div class="page__ad-horizontal" />
      <p>{{ seoText }}</p>
    </div>
  </div>
</template>

<script setup>
import MainSwiper from "@/components/MainSwiper";
import {useBannersStore} from "@/stores/banners";
import {useMovieStore} from "@/stores/movies";
import {useMainStore} from "@/stores/main";
import {useScheduleStore} from "@/stores/schedule";
import {computed} from "vue";
import {usePagesStore} from "@/stores/pages";


const mainStore = useMainStore();
const bannersStore = useBannersStore();
const scheduleStore = useScheduleStore();
const movieStore = useMovieStore();
const pagesStore = usePagesStore();

bannersStore.getMovieBanners();
bannersStore.getNewsBanners();
scheduleStore.getSchedule();
movieStore.getMovies();
movieStore.getUpcoming();

const todayMovies = computed(() => {
  let result = [];
  let date = new Date().setHours(0, 0, 0, 0);
  let today = scheduleStore.scheduledEvents.filter((event) => date === new Date(event.start).setHours(0, 0, 0, 0));
  if (today.length > 0) {
    today.forEach((event) => {
      movieStore.movieList.forEach((movie) => {
        if (movie.data[0].title === event.selectedMovie) {
          result.push(movie)
        }
      })
    });
  }
  return result;
});

const upcomingMovies = computed(() => {
  let array = movieStore.upcomingList;
  return array.sort((a,b) => {
    return a.data[mainStore.currentLanguage.index].screeningDate - b.data[mainStore.currentLanguage.index].screeningDate;
  }).slice(0,4);
});

function customRoute(title, route) {
  if (route.includes('schedule')) {
    let name = null;
    scheduleStore.scheduledEvents.forEach((event) => {
      if (event.selectedMovie === title) {
        name = event.name;
      }
    })
    return route + name.replace('event-', '')
  }
  else {
    return route + title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-');
  }
}

function displayDate(date) {
  let dd = new Date(date).getDate();
  let mm = new Date(date).getMonth() + 1;
  let yyyy = new Date(date).getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '.' + mm + '.' + yyyy;
}

const seoText = computed(() => {
  let text = null;
  pagesStore.pagesList.forEach((page) => {
    if (page.name.includes('home')) {
      text = page.data[mainStore.currentLanguage.index].seoText;
    }
  });
  return text;
})

</script>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

.movies, .upcoming {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.movie {
  position: relative;
  width: calc(25% - 25px);
  display: flex;
  flex-direction: column;
}

.movie__img {
  width: 100%;
  height: 100%;
  max-height: 390px;
}
.movie__content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.movie__content-date {
  margin: auto 0 0;
}

.page__ad-horizontal {
  width: 80%;
  height: 120px;
  border: 1px solid wheat;
  margin: 2rem auto;
}
</style>