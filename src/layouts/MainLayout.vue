<template>
  <div class="wrapper" :class="{'active': mainStore.isActive}" @click="mainStore.isActive = false">
    <TheHeader
        v-if="$route.name!=='Login' && $route.name!=='Register'"
        :navigation="pagesStore.pagesList"
        :background="bannersStore.background.color"
    />
    <div class="backdrop" v-if="mainStore.isActive" />
    <div class="background" v-if="$route.name!=='Login' && $route.name!=='Register'" />
    <router-view class="main" />
    <TheFooter
        v-if="$route.name!=='Login' && $route.name!=='Register' && $route.name!=='Profile'"
        :navigation="pagesStore.pagesList"
        :background="bannersStore.background.color"
    />
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, watch} from "vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/main";
import {usePagesStore} from "@/stores/pages";
import {useBannersStore} from "@/stores/banners";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";


const route = useRoute();
const mainStore = useMainStore();
watch(() => route.path, () => {
  mainStore.isActive = false;
});
onBeforeUnmount(() => {
  mainStore.isActive = false;
})
watch(() => mainStore.isActive, (value) => {
  if (!value) {
    document.documentElement.style.overflowY = 'auto'
  }
  else {
    document.documentElement.style.overflowY = 'hidden'
  }
});

const bannersStore = useBannersStore();
bannersStore.getBackground();
const backgroundImage = computed(() => {
  if (bannersStore.background.selected === "Image") {
    return `url("${bannersStore.background.banner.url}")`;
  }
  else {
    return 'none';
  }
});
const backgroundColor = computed(() => {
  return bannersStore.background.color;
});


const pagesStore = usePagesStore();
pagesStore.getPages();


</script>

<script>

export default {
  name: "MainLayout",
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  color: #F5F5F5;
}

.backdrop {
  -webkit-animation: roll-out .3s linear;
  animation: roll-out .3s linear;
  background-color: rgba(0,0,0,.5);
  inset: 0;
  opacity: 1;
  position: fixed;
  z-index: 7;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 0;
  background-size: cover;
  background-image: v-bind(backgroundImage);
  background-color: v-bind(backgroundColor);
}

.main {
  position: relative;
  overflow-x: hidden;
  flex: 1 1 auto;
  z-index: 1;
}

.page {
  padding-top: 104px;
  display: flex;
  flex-direction: column;
}


@keyframes roll-out {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

</style>

<style>
.container {
  background-color: v-bind(backgroundColor);
  padding: 0;
}
</style>