<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content mb-3 mt-3">
        <div class="footer__content-info mr-5">
          <router-link to="/" class="logo">
            <h2>Logo</h2>
          </router-link>
          <p class="mb-1">{{ $t('contact') }}</p>
          <a v-for="(number, index) in phoneNumbers" :key="index" :href="`tel:${number}`" >
            {{ number }}
          </a>
        </div>
        <ul class="footer__content-links m-auto">
          <li v-for="(page, index) in navigationLinks" :key="index">
            <router-link v-if="!isCustom(page.routeName)" :to="{ name: page.routeName }">
              {{ page.data[mainStore.currentLanguage.index].title }}
            </router-link>
            <router-link v-else :to="customRoute(page.data[0].title)">
              {{ page.data[mainStore.currentLanguage.index].title }}
            </router-link>
          </li>
        </ul>
        <div class="footer__content-socials-mobile">
          <div class="footer__content-socials">
            <div class="icon" />
            <div class="icon" />
            <div class="icon" />
          </div>
          <div class="footer__content-badge">
            <img src="@/assets/images/google-play-badge-en.png" alt="" v-if="mainStore.currentLanguage.index === 0">
            <img src="@/assets/images/google-play-badge.png" alt="" v-else>
          </div>
          <div class="footer__content-badge">
            <img src="@/assets/images/app-store-badge-en.png" alt="" v-if="mainStore.currentLanguage.index === 0">
            <img src="@/assets/images/app-store-badge.png" alt="" v-else>
          </div>
        </div>
      </div>

    </div>
    <div class="footer__copyright">
      <p class="text-center mb-0">{{ $t('copyright') }}</p>
    </div>
  </footer>
</template>

<script setup>
import {computed} from "vue";
import {useMainStore} from "@/stores/main";
import {usePagesStore} from "@/stores/pages";

const mainStore = useMainStore();
const pagesStore = usePagesStore();
const props = defineProps(['navigation', 'background']);

const navigationLinks = computed(() => {
  return props.navigation.filter(page => page.status)
});

const columns = computed(() => {
  if (navigationLinks.value.length < 9)
    return 2
  else if (navigationLinks.value.length > 12)
    return 4
  else
    return 3
})

function isCustom(routeName) {
  let custom = true;
  let standardPages = ['home', 'movies', 'schedule', 'upcoming', 'cinemas', 'specials', 'news', 'contacts'];
  standardPages.forEach((standard) => {
    if (standard === routeName.toLowerCase()) {
      custom = false;
    }
  })
  return custom;
}
function customRoute(title) {
  return '/' + title.toLowerCase().replace(/\s/g, '-');
}

const phoneNumbers = computed(() => {
  let numbers = [];
  pagesStore.pagesList.forEach((page) => {
    if (page.name.includes('home')) {
      numbers = page.data[mainStore.currentLanguage.index].phone;
    }
  });
  return numbers;
});
</script>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
.footer {
  background: v-bind(background);
  border-top: 1px solid rgba(255,193,7,0.8);
  position: relative;
  z-index: 1;
}

.footer__content {
  display: flex;
}

.footer__content-info {
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
}

.footer__content-links {
  -webkit-column-count: v-bind(columns);
  column-count: v-bind(columns);
}
.footer__content-links li {
  margin-right: 3rem;
  margin-bottom: 0.5rem;
}

.footer__content-socials-mobile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__content-socials {
  display: flex;
  justify-content: space-between;
}
.icon {
  /*margin-right: 1rem;*/
  height: 36px;
  width: 36px;
  border: 1px solid wheat;
  cursor: pointer;
}

.footer__content-badge {
  max-width: 160px;
  margin-top: 1rem;
  cursor: pointer;
}
.footer__content-badge img {
  width: 100%;
}

.footer__copyright {
  padding: 8px 0;
  border-top: 1px solid rgba(255,193,7,0.8);
}

a {
  color: inherit;
  transition: color .3s;
}
a:hover {
  color: #FFC107;
}
</style>