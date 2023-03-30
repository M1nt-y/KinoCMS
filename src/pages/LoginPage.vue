<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <router-link to="/" class="h1">
            {{ $t('loginPage.title') }}
          </router-link>
        </div>
        <div class="card-body">
          <p class="login-box-msg">{{ $t('loginPage.start') }}</p>
          <div class="input-group mb-3">
            <input type="email" class="form-control" :placeholder="$t('placeholders.email')" v-model="authStore.authEmail">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" :placeholder="$t('placeholders.password')" v-model="authStore.authPassword">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <p class="mb-3 text-center error-message" v-if="authStore.errorMessage">{{ authStore.errorMessage }}</p>
          <div class="row justify-content-end mb-3">
            <div class="col-4">
              <button class="btn btn-primary btn-block" @click="signIn">{{ $t('loginPage.button') }}</button>
            </div>
          </div>
          <p class="mb-3 text-center">
            {{ $t('loginPage.notmember') }}<router-link to="/register">{{ $t('loginPage.signup') }}</router-link>
          </p>

          <p class="mb-0 text-center lang" @click="changeLanguage">
            {{ $t('changeLanguage') }}
          </p>

<!--          <p class="mb-1">-->
<!--            <a href="forgot-password.html">I forgot my password</a>-->
<!--          </p>-->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useMainStore } from "@/stores/main";
import { onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";


const authStore = useAuthStore();
const mainStore = useMainStore();
const router = useRouter();
const { locale } = useI18n();

function signIn() {
  authStore.login();
}

function changeLanguage() {
  if (mainStore.currentLanguage.selected === 'en') {
    locale.value = mainStore.currentLanguage.selected = 'ua';
    mainStore.currentLanguage.index = 1;
  }
  else {
    locale.value = mainStore.currentLanguage.selected = 'en';
    mainStore.currentLanguage.index = 0;
  }
  localStorage.setItem('user-locale', mainStore.currentLanguage.selected);
}

watch(() => authStore.currentUser, (value) => {
  if (value !== null) {
    authStore.errorMessage = '';
    router.push('/');
  }
});
onBeforeUnmount(() => {
  authStore.errorMessage = '';
});
</script>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
.login-page {
  color: #121212;
}
.error-message {
  color: red;
}
.lang {
  cursor: pointer;
}
</style>