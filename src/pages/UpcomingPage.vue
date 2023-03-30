<template>
  <div class="page">
<!--    <div class="page__side"></div>-->
    <div class="container">
      <div class="page__content">
        <router-link class="movie" v-for="movie in movieStore.upcomingList" :key="movie.id" :to="customRoute(movie.data[0].title)" >
          <!--          <div class="movie__types" v-if="movie.data[mainStore.currentLanguage.index].type.length">-->
          <!--            <div class="movie__type" v-for="(type, index) in movie.data[mainStore.currentLanguage.index].type" :key="index">-->
          <!--              <p>{{ type }}</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <img class="movie__img" :src="movie.data[mainStore.currentLanguage.index].main.url" alt="">
          <p class="movie__title">{{ movie.data[mainStore.currentLanguage.index].title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMovieStore} from "@/stores/movies";
import {useMainStore} from "@/stores/main";


const mainStore = useMainStore();
const movieStore = useMovieStore();
movieStore.getUpcoming();

function customRoute(title) {
  return 'upcoming/' + title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-');
}

</script>

<script>
export default {
  name: "UpcomingPage"
}
</script>

<style scoped>
.page {
  display: flex;
  position: relative;
}

.page__side {
  position: absolute;
  left: 0;
  width: 250px;
  height: 600px;
  border: 1px solid wheat;
  margin: 0 2rem;
}

.page__content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.movie {
  position: relative;
  width: calc(25% - 25px);
}

.movie__types {
  position: absolute;
  text-align: center;
  right: 0;
  margin-top: 1rem;
}
.movie__type {
  padding: 2px 5px;
  background: #00c4ff;
  margin-bottom: 5px;
  border-radius: 5px;
}
.movie__type p {
  margin-bottom: 0;
}

.movie__img {
  width: 100%;
  max-height: 390px;
}
</style>