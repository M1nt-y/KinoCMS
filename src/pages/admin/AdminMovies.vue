<template>
  <div class="movies">
    <TheLoading v-show="movieStore.loading" />
    <h2>List of current movies</h2>
    <div class="movies__wrapper">
      <div class="movies__content">
        <DeleteModal
            @confirmDeletion="movieStore.deleteMovie(movieID)"
            @closeModal="movieStore.showModal = false"
            v-if="movieStore.showModal"
        />
        <div class="movie" v-for="movie in movieStore.movieList" :key="movie.id">
          <router-link :to="`movies/${movie.id}`">
            <img class="movie__preview" src="@/assets/images/image-icon.png" alt="" v-if="movie.images[0].main.url === null">
            <img class="movie__preview" :src="movie.images[0].main.url" alt="" v-else>
            <p class="movie__title">{{ movie.data[0].title }}</p>
          </router-link>
          <div class="movie__remove" @click="toggleModal(movie.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1.5)">
                <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="movies__content-add" @click="handleAddMovie">
          <span>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <h2>List of upcoming movies</h2>
    <div class="movies__wrapper">
      <div class="movies__content">
        <DeleteModal
            @confirmDeletion="movieStore.deleteUpcoming(movieID)"
            @closeModal="movieStore.showUpcomingModal = false"
            v-if="movieStore.showUpcomingModal"
        />
        <div class="movie" v-for="movie in movieStore.upcomingList" :key="movie.id">
          <router-link :to="`upcoming/${movie.id}`">
            <img class="movie__preview" src="@/assets/images/image-icon.png" alt="" v-if="movie.images[0].main.url === null">
            <img class="movie__preview" :src="movie.images[0].main.url" alt="" v-else>
            <p class="movie__title">{{ movie.data[0].title }}</p>
          </router-link>
          <div class="movie__remove" @click="toggleUpcomingModal(movie.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1.5)">
                <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="movies__content-add" @click="handleAddUpcoming">
          <span>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import TheLoading from "@/components/admin/TheLoading";
import DeleteModal from "@/components/admin/DeleteModal";
import {useRouter} from "vue-router";

const router = useRouter()

const movieStore = useMovieStore();

movieStore.getMovies();
movieStore.getUpcoming();

const handleAddMovie = () => {
  movieStore.addMovie({
    id: movieStore.movieList.length,
    name: 'movie-' + Date.now(),
    uploaded: false,
    language: {
      selected: 'en',
      index: 0
    },
    data: [
      {
        title: '',
        description: '',
        trailer: '',
        type: [],
        main: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      },
      {
        title: '',
        description: '',
        trailer: '',
        type: [],
        main: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      }
    ],
    images: [
      {
        main: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      },
      {
        main: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      }
    ]
  });
  router.push({
    name: 'AdminMovie',
    params: {
      id: movieStore.movieList.length-1,
    }
  })
}

const handleAddUpcoming = () => {
  movieStore.addUpcoming({
    id: movieStore.upcomingList.length,
    name: 'movie-' + Date.now(),
    uploaded: false,
    language: {
      selected: 'en',
      index: 0
    },
    data: [
      {
        title: '',
        description: '',
        trailer: '',
        type: [],
        screeningDate: '',
        main: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      },
      {
        title: '',
        description: '',
        trailer: '',
        type: [],
        screeningDate: '',
        main: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      }
    ],
    images: [
      {
        main: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      },
      {
        main: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      }
    ]
  });
  router.push({
    name: 'AdminUpcoming',
    params: {
      id: movieStore.upcomingList.length-1,
    }
  })
}

let movieID = null;
function toggleModal(id) {
  movieStore.showModal = true;
  movieID = id;
}
function toggleUpcomingModal(id) {
  movieStore.showUpcomingModal = true;
  movieID = id;
}

</script>

<script>
export default {
  name: "AdminMovies"
}
</script>

<style scoped>
.movies {
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.movies__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.movies__content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.movies__content-add {
  cursor: pointer;
}
.movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 180px;
}

.movie__preview {
  width: 100%;
  max-height: 270px;
}

.movie__remove {
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
}
a {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>