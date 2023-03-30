<template>
  <div class="container">
    <swiper
        :slides-per-view="1"
        :modules="modules"
        grab-cursor
        :autoplay="{ delay: rotation*1000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="banner in gallery" :key="banner.id">
        <router-link :to="banner.url">
          <img :src="banner.image" alt="">
          <div class="movie-info__container" v-if="banner.title">
            <h1>{{ banner.title }}</h1>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import {ref} from "vue";

defineProps(['gallery', 'rotation']);

const modules = ref([Autoplay])

</script>

<script>
export default {
  name: "MainSwiper"
}
</script>

<style scoped>
img {
  width: 100%;
}

.movie-info__container {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(transparent,rgba(0,0,0,.5) 20%,rgba(0,0,0,.7));
  color: #FFFFFF;

  padding-block: 2rem;
  padding-inline: 2rem;
}

</style>