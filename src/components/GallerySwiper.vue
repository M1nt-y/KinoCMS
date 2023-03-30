<template>
  <div class="gallery">
    <h2 class="text-center">{{ $t('gallery') }}</h2>
    <swiper
        grab-cursor
        :slides-per-view="1"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="true"
    >
      <swiper-slide v-for="(image, index) in gallery" :key="index">
        <img :src="image.url" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import {ref} from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = ref([Pagination, Autoplay, Navigation]);
defineProps(['gallery']);
</script>

<script>
export default {
  name: "GallerySwiper"
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>