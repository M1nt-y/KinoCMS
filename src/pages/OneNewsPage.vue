<template>
  <div class="page">
    <div class="container" v-if="newsId !== null">
      <h1>{{ title }}</h1>
      <div class="news">
        <img class="news__img" :src="image" alt="">
        <p>{{ description }}</p>
      </div>
      <GallerySwiper
          v-if="gallery.length"
          :gallery="gallery"
      />
      <div class="page__ad-horizontal" />
    </div>
    <div class="page__notfound" v-else>
      <div class="container">
        <h2>News not found</h2>
        <router-link to="/news">Go back</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useMainStore} from "@/stores/main";
import {useNewsStore} from "@/stores/news";
import GallerySwiper from "@/components/GallerySwiper";


const props = defineProps(['id']);
const mainStore = useMainStore();
const newsStore = useNewsStore();
newsStore.getNews();


const newsId = computed(() => {
  let newsId = null;
  newsStore.newsList.forEach((news, index) => {
    if (news.name.includes(props.id)) {
      newsId = index;
    }
  });
  return newsId;
});

const title = computed(() => {
  let title = null;
  if (newsId.value !== null) {
    title = newsStore.newsList[newsId.value].data[mainStore.currentLanguage.index].title;
  }
  return title;
});

const image = computed(() => {
  let url = null;
  if (newsId.value !== null) {
    url = newsStore.newsList[newsId.value].data[mainStore.currentLanguage.index].main.url;
  }
  return url;
});

const description = computed(() => {
  let description = null;
  if (newsId.value !== null) {
    description = newsStore.newsList[newsId.value].data[mainStore.currentLanguage.index].description;
  }
  return description;
});

const gallery = computed(() => {
  let gallery = [];
  if (newsId.value !== null) {
    gallery = newsStore.newsList[newsId.value].data[mainStore.currentLanguage.index].gallery;
  }
  return gallery;
});
</script>

<script>
export default {
  name: "OneNewsPage"
}
</script>

<style scoped>
.news {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.news__img {
  max-width: 480px;
  margin-right: 2rem;
}

.page__notfound {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}
</style>