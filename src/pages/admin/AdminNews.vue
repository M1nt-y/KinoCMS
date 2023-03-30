<template>
  <div class="news">
    <TheLoading v-show="newsStore.loading" />
    <h2>List of news</h2>
    <ItemList
        status
        :route-name="'AdminOneNews'"
        :items="newsStore.newsList"
        :show-modal="newsStore.showModal"
        @addItem="addNews"
        @toggleModal="newsStore.showModal = true"
        @closeModal="newsStore.showModal = false"
        @deleteItem="newsStore.deleteNews"
    />
  </div>
</template>

<script setup>
import { useNewsStore } from "@/stores/news";
import TheLoading from "@/components/admin/TheLoading";
import ItemList from "@/components/admin/ItemList";
import {useRouter} from "vue-router";

const router = useRouter()

const newsStore = useNewsStore();

newsStore.getNews();

function addNews() {
  newsStore.newsList.push({
    id: newsStore.newsList.length,
    name: 'news-' + Date.now(),
    creationDate: Date.now(),
    uploaded: false,
    status: false,
    language: {
      selected: 'en',
      index: 0
    },
    data: [
      {
        title: '',
        publicationDate: '',
        description: '',
        videoLink: '',
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
        publicationDate: '',
        description: '',
        videoLink: '',
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
    name: 'AdminOneNews',
    params: {
      id: newsStore.newsList.length-1,
      parent: 0
    }
  });
}

</script>

<script>
export default {
  name: "AdminNews",
}
</script>

<style scoped>
.news {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>