<template>
  <header class="header">
    <div class="header__top" @click.stop>
      <div class="container">
        <div class="header__top-contact">
          <span>{{  $t('contact') }}</span>
          <div class="header__top-links">
            <a class="header__top-link" v-for="(number, index) in phoneNumbers" :key="index" :href="`tel:${number}`">
              {{ number }}
            </a>
          </div>
        </div>
        <div class="header__top-login">
          <router-link to="/login" v-if="!authStore.isLoggedIn">{{  $t('login') }}</router-link>
          <router-link to="/" v-else @click="authStore.logout">{{  $t('logout') }}</router-link>
        </div>
      </div>
    </div>
    <div class="header__main">
      <div class="container">
        <div class="header__main-content">

          <router-link to="/" class="logo">
            <h1>Logo</h1>
          </router-link>

          <nav class="header__navigation">
            <router-link to="/movies">{{  $t('navigation.movies') }}</router-link>
            <router-link to="/schedule">{{  $t('navigation.schedule') }}</router-link>
          </nav>

          <TheSearch class="header__search" />

          <div class="header__lang">
            <select class="form-control" v-model="mainStore.currentLanguage.selected">
              <option value="en">EN</option>
              <option value="ua">UA</option>
            </select>
          </div>

          <div class="header__burger" @click.stop="mainStore.toggleMenu">
            <span></span>
          </div>

        </div>
      </div>
    </div>

    <div class="header__sidebar" @click.stop>
      <ul class="header__sidebar-nav">
        <li v-if="authStore.isAdmin">
          <router-link class="header__sidebar-link" to="/admin">{{  $t('navigation.admin') }}</router-link>
        </li>
        <li v-else-if="authStore.isLoggedIn">
          <router-link class="header__sidebar-link" to="/profile">{{  $t('navigation.profile') }}</router-link>
        </li>

        <li v-for="(page, index) in navigationLinks" :key="index">
          <router-link class="header__sidebar-link" :to="{ name: page.routeName }" v-if="!isCustom(page.routeName)">
            {{ page.data[mainStore.currentLanguage.index].title }}
          </router-link>
          <router-link class="header__sidebar-link" :to="customRoute(page.data[0].title)" v-else>
            {{ page.data[mainStore.currentLanguage.index].title }}
          </router-link>
        </li>
      </ul>
    </div>

  </header>
</template>

<script setup>
import {useAuthStore} from "@/stores/auth";
import {useMainStore} from "@/stores/main";
import { useI18n } from 'vue-i18n';
import {computed, onBeforeMount, watch} from "vue";
import {usePagesStore} from "@/stores/pages";
import TheSearch from "@/components/TheSearch";


const authStore = useAuthStore();
const mainStore = useMainStore();
const pagesStore = usePagesStore();
const { locale } = useI18n();
const props = defineProps(['navigation', 'background']);

onBeforeMount(() => {
  mainStore.currentLanguage.selected = localStorage.getItem('user-locale') || 'en';
});

watch(() => mainStore.currentLanguage.selected, (value) => {
  if (value === 'en') {
    locale.value = 'en';
    mainStore.currentLanguage.index = 0;
  }
  else {
    locale.value = 'ua';
    mainStore.currentLanguage.index = 1;
  }
  localStorage.setItem('user-locale', mainStore.currentLanguage.selected);
});

const navigationLinks = computed(() => {
  return props.navigation.filter(page => page.status && !page.name.includes('home') && !page.name.includes('movies') && !page.name.includes('schedule'))
});

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
  return title.toLowerCase().replace(/\s/g, '-');
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
  name: "TheHeader"
}
</script>

<style scoped>

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  transition: top .15s;
  margin-right: calc(-1 * (100vw - 100%));
  background-color: v-bind(background);
}

.header__top {
  /*background: v-bind(background);*/
  position: relative;
  z-index: 50;
  height: 44px;
  border-bottom: 1px solid rgba(255,193,7,0.8);
  font-size: 14px;
}
.header__top .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
}
.header__top-contact {
  height: 44px;
  line-height: 44px;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.header__top-links {
  display: flex;
  flex-direction: column;
}
.header__top-link {
  text-decoration: none;
  line-height: 22px;
  font-weight: 700;
  margin-left: 5px;
  /*transition: all .3s ease-in;*/
}

.header__main {
  border-bottom: 1px solid rgba(255,193,7,0.8);
  height: 60px;
  display: flex;
  align-items: center;
  overflow-y: unset;
}

.header__main-content {
  width: 100%;
  display: flex;
  align-items: center;
  /*justify-content: space-between;*/
}

.header__navigation {
  float: left;
  /*overflow: hidden;*/
}
.header__navigation a {
  margin-left: 3rem;
}


.header__search {
  width: 40%;
  margin-left: auto;
}

.header__lang {
  margin-left: 1rem;
}

.header__burger {
  width: 40px;
  height: 40px;
  margin-left: 1rem;
  cursor: pointer;
}



.header__sidebar {
  position: fixed;
  top: 0;
  right: -200px;
  height: 100vh;
  background: v-bind(background);
  width: 0;
  overflow: hidden;
  transition: width .4s;
  padding: 104px 0 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 49;
}
.active .header__sidebar {
  overflow: auto;
  /*box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);*/
  right: 0;
  width: 35%;
}

.header__sidebar-nav {
  display: flex;
  flex-direction: column;
}

.header__sidebar-link {
  max-width: 160px;
  font-size: 22px;
  font-weight: 700;
  line-height: 40px;
  /*color: #645757;*/
  transition: all .3s ease-in-out;
  margin-bottom: 15px;
}

h1, p {
  margin: 0;
}
a {
  color: inherit;
  transition: color .3s;
}
a:hover {
  color: #FFC107;
}
</style>