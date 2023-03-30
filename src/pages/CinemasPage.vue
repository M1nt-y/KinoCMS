<template>
  <div class="page">
    <div class="container">

      <div class="cinemas">
        <router-link class="cinema" v-for="cinema in cinemaStore.cinemaList" :key="cinema.id" :to="customRoute(cinema.data[0].title)">
          <img class="cinema__img" :src="cinema.data[mainStore.currentLanguage.index].logo.url" alt="">
          <p>{{ cinema.data[mainStore.currentLanguage.index].title }}</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useCinemaStore} from "@/stores/cinemas";
import {useMainStore} from "@/stores/main";


const mainStore = useMainStore();
const cinemaStore = useCinemaStore();
cinemaStore.getCinemas();

function customRoute(title) {
  return 'cinemas/' + title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-');
}
</script>

<script>
export default {
  name: "CinemasPage"
}
</script>

<style scoped>
.cinemas {
  display: flex;
  flex-wrap: wrap;

}
.cinema {
  width: calc(50% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
}
.cinema__img {
  margin: auto 0;
  width: 100%;
}
</style>