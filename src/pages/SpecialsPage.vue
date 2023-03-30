<template>
  <div class="page">
    <div class="container">
      <div class="specials">
        <router-link class="special-offer" v-for="offer in offerList" :key="offer.id" :to="customRoute(offer.name)" >
          <img class="special-offer__img" :src="offer.data[mainStore.currentLanguage.index].main.url" alt="" >
          <div class="special-offer__content">
            <p>{{ offer.data[mainStore.currentLanguage.index].title }}</p>
            <p>{{ displayDate(offer.data[mainStore.currentLanguage.index].publicationDate) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/main";
import {useSpecialsStore} from "@/stores/specials";
import {computed} from "vue";


const mainStore = useMainStore();
const specialsStore = useSpecialsStore();
specialsStore.getOffers();

const offerList = computed(() => {
  let date = new Date();
  let array = [];
  specialsStore.offerList.forEach((offer) => {
    if (offer.data[mainStore.currentLanguage.index].publicationDate < date && offer.status) {
      array.push(offer);
    }
  });
  return array;
})

function customRoute(name) {
  return 'specials/' + name.replace('offer-', '');
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
  name: "SpecialsPage"
}
</script>

<style scoped>
.specials {
  display: flex;
  flex-wrap: wrap;
}
.special-offer {
  max-width: calc(33% - 2rem);
  margin: 0 1rem;
}
.special-offer__img {
  width: 100%;
}
.special-offer__content {
  padding: 5px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(60,60,60,0.6);
}
.special-offer__content p {
  margin: 0;
}
</style>