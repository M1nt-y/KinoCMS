<template>
  <div class="page">
    <div class="container">
      <h1 class="text-center">Contacts</h1>
      <div class="page__content">
        <div class="page__cinemas">
          <div class="cinema" v-for="(cinema) in cinemaStore.cinemaList" :key="cinema.id">
            <div class="cinema__info">
              <h2>{{ cinema.data[mainStore.currentLanguage.index].title }}</h2>
              <img class="cinema__logo" :src="cinema.data[mainStore.currentLanguage.index].logo.url" alt="">
              <img class="cinema__banner" v-if="cinema.data[mainStore.currentLanguage.index].banner.url" :src="cinema.data[mainStore.currentLanguage.index].banner.url" alt="">
            </div>
            <div class="cinema__address">
              <p>{{ cinemas[cinema.id].address }}</p>
              <iframe :src="'https://maps.google.com/maps?q=' + cinemas[cinema.id].coordinate.replace(' ', '') + '&t=&z=15&ie=UTF8&iwloc=&output=embed'" />
            </div>
          </div>
        </div>
        <div class="page__ad-vert" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/main";
import {useCinemaStore} from "@/stores/cinemas";
import {usePagesStore} from "@/stores/pages";
import {computed} from "vue";

const mainStore = useMainStore();
const cinemaStore = useCinemaStore();
const pagesStore = usePagesStore();
cinemaStore.getCinemas();

const cinemas = computed(() => {
  let cinemas = [];
  pagesStore.pagesList.forEach((page) => {
    if (page.name.includes('contacts')) {
      cinemas = page.data[mainStore.currentLanguage.index].cinemas;
    }
  })
  return cinemas;
})

</script>

<script>
export default {
  name: "ContactsPage"
}
</script>

<style scoped>
.page__content {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.page__cinemas {
  display: flex;
  flex-direction: column;
}
.cinema {
  display: flex;
  align-items: flex-start;

}
.cinema__info {
  width: calc(40% - 5rem);
  margin-right: 5rem;
}
.cinema__logo,
.cinema__banner {
  width: 100%;
}

.page__ad-vert {
  display: flex;
  max-width: 200px;
  width: 100%;
  height: 400px;
  border: 1px solid wheat;
  margin-left: 2rem;
}
</style>