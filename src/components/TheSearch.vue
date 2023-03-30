<template>
  <div class="header__search-group" ref="search">
    <div class="input-group">
      <input
          type="search"
          class="form-control"
          :placeholder="$t('placeholders.search')"
          v-model="searchInput"
          @click="toggleActive"
      >
      <div class="input-group-append">
        <button type="submit" class="btn btn-default">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="header__search-results">
      <router-link v-for="result in searchResults" :key="result.id" :to="customRoute(result.data[0].title)">
        {{ result.data[mainStore.currentLanguage.index].title }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {useMainStore} from "@/stores/main";
import {useMovieStore} from "@/stores/movies";
import {useRoute} from "vue-router";

const route = useRoute();
const search = ref(null);
const mainStore = useMainStore();
const movieStore = useMovieStore();
const searchInput = ref('');

onMounted(() => {
  let prev = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let curr = window.pageYOffset;
    if (prev < curr) {
      search.value.classList.remove("active");
    }
  });
});

function toggleActive() {
  search.value.classList.add("active");
}

watch(() => route.path, () => {
  searchInput.value = '';
});

const searchResults = computed(() => {
  if (searchInput.value) {
    search.value.classList.add("active");
    return movieStore.movieList.filter(movie => movie.data[mainStore.currentLanguage.index].title.toLowerCase().includes(searchInput.value.toLowerCase()));
  }
  else {
    return [];
  }
});

function customRoute(title) {
  return '/movies/' + title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-');
}
</script>

<script>
export default {
  name: "TheSearch"
}
</script>

<style scoped>
.header__search-group {
  position: relative;
  z-index: 10;
}
.active .header__search-results {
  overflow: auto;
  height: auto;
}
.header__search-results {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFFFFF;
  overflow: hidden;
  height: 0;
  transition: all 0.3s;
}
</style>