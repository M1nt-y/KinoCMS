<template>
  <div class="page mb-5">
    <div class="page__banner" v-if="banner !== null" />
    <div class="container" v-if="id !== null">
      <div class="page__wrapper">
        <h2 class="text-center mt-4 mb-4">{{ title }}</h2>
        <div class="page__content">
          <p class="page__content-description">{{ content }}</p>
          <div class="page__content-ad" />
        </div>

        <GallerySwiper
            v-if="gallery.length"
            :gallery="gallery"
        />
      </div>
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>Page not found</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useMainStore} from "@/stores/main";
import {usePagesStore} from "@/stores/pages";
import GallerySwiper from "@/components/GallerySwiper";


const props = defineProps(['title']);
const mainStore = useMainStore();
const pagesStore = usePagesStore();


const id = computed(() => {
  let id = null;
  pagesStore.pagesList.forEach((page, index) => {
    if (page.data[0].title.toLowerCase().replace(/\s/g, '-') === props.title) {
      id = index;
    }
  });
  return id;
});

const banner = computed(() => {
  if (id.value) {
    return `url("${pagesStore.pagesList[id.value].images[mainStore.currentLanguage.index].main.url}")`;
  }
  else {
    return null;
  }
});

const title = computed(() => {
  if (id.value) {
    return pagesStore.pagesList[id.value].data[mainStore.currentLanguage.index].title;
  }
  else {
    return null;
  }
});

const content = computed(() => {
  if (id.value) {
    return pagesStore.pagesList[id.value].data[mainStore.currentLanguage.index].description;
  }
  else {
    return null;
  }
});

const gallery = computed(() => {
  if (id.value) {
    return pagesStore.pagesList[id.value].data[mainStore.currentLanguage.index].gallery;
  }
  else {
    return null;
  }
});

</script>

<script>
export default {
  name: "CustomPage"
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
.page__banner {
  width: 100%;
  aspect-ratio: 1 / 0.25;
  background-image: v-bind(banner);
  background-size: cover;
  background-position: center;
}

.page__content {
  display: flex;
  justify-content: space-between;
}
.page__content-description {
  max-width: 75%;
}
.page__content-ad {
  border: 1px solid wheat;
  width: 200px;
  height: 400px;
}

.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

</style>