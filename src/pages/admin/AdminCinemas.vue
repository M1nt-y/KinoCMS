<template>
  <div class="cinemas">
    <TheLoading v-show="cinemaStore.loading" />
    <h2>List of cinemas</h2>
    <div class="cinemas__wrapper">
      <div class="cinemas__content">
        <DeleteModal
            @confirmDeletion="cinemaStore.deleteCinema(cinemaID)"
            @closeModal="cinemaStore.showModal = false"
            v-if="cinemaStore.showModal"
        />
        <div class="cinema" v-for="cinema in cinemaStore.cinemaList" :key="cinema.id">
          <router-link :to="`cinemas/${cinema.id}`">
            <img class="cinema__preview" src="@/assets/images/image-icon.png" alt="" v-if="cinema.images[0].logo.url === null">
            <img class="cinema__preview" :src="cinema.images[0].logo.url" alt="" v-else>
            <p class="cinema__title">{{ cinema.data[0].title }}</p>
          </router-link>
          <div class="cinema__remove" @click="toggleModal(cinema.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1.5)">
                <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="cinemas__content-add" @click="addCinema">
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
import { useCinemaStore } from "@/stores/cinemas";
import TheLoading from "@/components/admin/TheLoading";
import DeleteModal from "@/components/admin/DeleteModal";
import {useRouter} from "vue-router";

const router = useRouter()

const cinemaStore = useCinemaStore();

cinemaStore.getCinemas();

function addCinema() {
  cinemaStore.cinemaList.push({
    id: cinemaStore.cinemaList.length,
    name: 'cinema-' + Date.now(),
    uploaded: false,
    language: {
      selected: 'en',
      index: 0
    },
    data: [
      {
        title: '',
        description: '',
        conditions: '',
        logo: {
          name: null,
          url: null,
        },
        banner: {
          name: null,
          url: null,
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
        conditions: '',
        logo: {
          name: null,
          url: null,
        },
        banner: {
          name: null,
          url: null,
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
        logo: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        banner: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      },
      {
        logo: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        banner: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      }
    ],
    halls: [],
    deletedHalls: []
  });
  router.push({
    name: 'AdminCinema',
    params: {
      id: cinemaStore.cinemaList.length-1,
    }
  })
}

let cinemaID = null;

function toggleModal(id) {
  cinemaStore.showModal = true;
  cinemaID = id;
}

</script>

<script>
export default {
  name: "AdminCinemas",
}
</script>

<style scoped>
.cinemas {
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.cinemas__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.cinemas__content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.cinemas__content-add {
  cursor: pointer;
}
.cinema {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 180px;
}

.cinema__preview {
  width: 100%;
}

.cinema__remove {
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>