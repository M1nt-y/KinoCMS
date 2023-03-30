<template>
  <div class="page">
    <div class="container">
      <div class="news">
        <router-link class="special-news" v-for="news in newsList" :key="news.id" :to="customRoute(news.name)" >
          <img class="special-news__img" :src="news.data[mainStore.currentLanguage.index].main.url" alt="" >
          <div class="special-news__content">
            <p>{{ news.data[mainStore.currentLanguage.index].title }}</p>
            <p>{{ displayDate(news.data[mainStore.currentLanguage.index].publicationDate) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/main";
import {useNewsStore} from "@/stores/news";
import {computed} from "vue";


const mainStore = useMainStore();
const newsStore = useNewsStore();
newsStore.getNews();

const newsList = computed(() => {
  let date = new Date();
  let array = [];
  newsStore.newsList.forEach((news) => {
    if (news.data[mainStore.currentLanguage.index].publicationDate < date && news.status) {
      array.push(news);
    }
  });
  return array;
})

function customRoute(name) {
  return 'news/' + name.replace('news-', '');
}
function displayDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '.' + mm + '.' + yyyy;
}
</script>

<script>
export default {
  name: "NewsPage"
}
</script>

<style scoped>
.news {
  display: flex;
  flex-wrap: wrap;
}
.one-news {
  max-width: calc(33% - 2rem);
  margin: 0 1rem;
}
.one-news__img {
  width: 100%;
}
.one-news__content {
  padding: 5px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(60,60,60,0.6);
}
.one-news__content p {
  margin: 0;
}
</style>