<template>
  <div class="page">
    <div class="page__trailer" v-if="trailer !== null">
      <iframe class="page__trailer"
              :src="trailer" allowfullscreen
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
    <div class="container" v-if="id !== null">
      <div class="movie">
        <img class="movie__img" :src="image" alt="">
        <div class="movie__content">
          <h2> {{ name }} </h2>
          <p>{{ description }}</p>
          <GallerySwiper
              v-if="gallery.length"
              :gallery="gallery"
          />
        </div>
      </div>
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Movie not found</h2>
        <router-link to="/movies">Go back</router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import {computed} from "vue";
import {useMovieStore} from "@/stores/movies";
import {useMainStore} from "@/stores/main";
import GallerySwiper from "@/components/GallerySwiper";


const props = defineProps(['title']);

const mainStore = useMainStore();
const movieStore = useMovieStore();
movieStore.getMovies();


const id = computed(() => {
  let id = null;
  movieStore.movieList.forEach((movie, index) => {
    if (movie.data[0].title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\s/g, '-') === props.title) {
      id = index;
    }
  });
  return id;
});

const trailer = computed(() => {
  let link = null;
  if (id.value !== null) {
    if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer) {
      if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer.includes('youtu.be')) {
        link = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer.replace('youtu.be', 'www.youtube.com/embed')
      }
      else if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer.includes('youtube.com/watch?v=')) {
        link = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer.replace('watch?v=', 'embed/')
      }
      else {
        link = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].trailer;
      }
    }
  }
  return link;
});

const image = computed(() => {
  let link = null;
  if (id.value !== null) {
    if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].main.url) {
      link = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].main.url;
    }
  }
  return link;
});

const name = computed(() => {
  let name = null;
  if (id.value !== null) {
    if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].title) {
      name = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].title;
    }
  }
  return name;
});

const description = computed(() => {
  let description = null;
  if (id.value !== null) {
    if (movieStore.movieList[id.value].data[mainStore.currentLanguage.index].description) {
      description = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].description;
    }
  }
  return description;
});

const gallery = computed(() => {
  let gallery = [];
  if (id.value !== null) {
    gallery = movieStore.movieList[id.value].data[mainStore.currentLanguage.index].gallery;
  }
  return gallery;
});


</script>

<script>
export default {
  name: "MoviePage"
}
</script>

<style scoped>

.page__trailer {
  width: 100%;
  aspect-ratio: 1 / 0.45;
}

.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

.movie {
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
}

.movie__img {
  max-width: 400px;
}

.movie__content {
  margin-left: 3rem;
}

.gallery {
  max-width: 690px;
}
.page__ad-horizontal {
  width: 80%;
  margin-top: 2rem;
  height: 100px;
  border: 1px solid wheat;
}
</style>