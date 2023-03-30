<template>
  <div class="specials">
    <TheLoading v-show="specialsStore.loading" />
    <h2>List of specials</h2>
    <ItemList
        status
        :route-name="'AdminSpecialOffer'"
        :items="specialsStore.offerList"
        :show-modal="specialsStore.showModal"
        @addItem="addOffer"
        @toggleModal="specialsStore.showModal = true"
        @closeModal="specialsStore.showModal = false"
        @deleteItem="specialsStore.deleteOffer"
    />
  </div>
</template>

<script setup>
import { useSpecialsStore } from "@/stores/specials";
import TheLoading from "@/components/admin/TheLoading";
import ItemList from "@/components/admin/ItemList";
import {useRouter} from "vue-router";

const router = useRouter()

const specialsStore = useSpecialsStore();

specialsStore.getOffers();

function addOffer() {
  specialsStore.offerList.push({
    id: specialsStore.offerList.length,
    name: 'offer-' + Date.now(),
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
    name: 'AdminSpecialOffer',
    params: {
      id: specialsStore.offerList.length-1,
      parent: 0
    }
  });
}

</script>

<script>
export default {
  name: "AdminSpecials",
}
</script>

<style scoped>
.specials {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>