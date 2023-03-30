<template>
  <div class="page">
    <div class="container" v-if="offerId !== null">
      <h1>{{ title }}</h1>
      <div class="offer">
        <img class="offer__img" :src="image" alt="">
        <p>{{ description }}</p>
      </div>
      <GallerySwiper
          v-if="gallery.length > 0"
          :gallery="gallery"
      />
      <div class="page__ad-horizontal" />
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Special offer not found</h2>
        <router-link to="/specials">Go back</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useMainStore} from "@/stores/main";
import {useSpecialsStore} from "@/stores/specials";
import GallerySwiper from "@/components/GallerySwiper";


const props = defineProps(['id']);
const mainStore = useMainStore();
const specialsStore = useSpecialsStore();
specialsStore.getOffers();


const offerId = computed(() => {
  let offerId = null;
  specialsStore.offerList.forEach((offer, index) => {
    if (offer.name.includes(props.id)) {
      offerId = index;
    }
  });
  return offerId;
});

const title = computed(() => {
  let title = null;
  if (offerId.value !== null) {
    title = specialsStore.offerList[offerId.value].data[mainStore.currentLanguage.index].title;
  }
  return title;
});

const image = computed(() => {
  let url = null;
  if (offerId.value !== null) {
    url = specialsStore.offerList[offerId.value].data[mainStore.currentLanguage.index].main.url;
  }
  return url;
});

const description = computed(() => {
  let description = null;
  if (offerId.value !== null) {
    description = specialsStore.offerList[offerId.value].data[mainStore.currentLanguage.index].description;
  }
  return description;
});

const gallery = computed(() => {
  let gallery = [];
  if (offerId.value !== null) {
    gallery = specialsStore.offerList[offerId.value].data[mainStore.currentLanguage.index].gallery;
  }
  return gallery;
});

</script>

<script>
export default {
  name: "SpecialOfferPage"
}
</script>

<style scoped>

.offer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.offer__img {
  max-width: 480px;
  margin-right: 2rem;
}

.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}
</style>