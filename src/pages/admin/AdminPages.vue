<template>
  <div class="pages">
    <TheLoading v-show="pagesStore.loading" />
    <h2>List of pages</h2>
    <ItemList
        status
        :route-name="'AdminPage'"
        :items="pagesStore.pagesList"
        :show-modal="pagesStore.showModal"
        @addItem="addPage"
        @toggleModal="pagesStore.showModal = true"
        @closeModal="pagesStore.showModal = false"
        @deleteItem="pagesStore.deletePage"
    />
  </div>
</template>

<script setup>
import {usePagesStore} from "@/stores/pages";
import TheLoading from "@/components/admin/TheLoading";
import ItemList from "@/components/admin/ItemList";
import {useRouter} from "vue-router";

const router = useRouter()

const pagesStore = usePagesStore();

pagesStore.getPages();

function addPage() {
  pagesStore.pagesList.push({
    id: pagesStore.pagesList.length,
    name: 'page-' + Date.now(),
    creationDate: Date.now(),
    uploaded: false,
    status: false,
    language: {
      selected: 'en',
      index: 0
    },
    routeName: '',
    data: [
      {
        title: '',
        description: '',
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
    name: 'AdminPage',
    params: {
      id: pagesStore.pagesList.length-1,
      parent: 0
    }
  });
}

</script>

<script>
export default {
  name: "AdminPages",
}
</script>

<style scoped>
.pages {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>