<template>
  <div class="register-page">
    <div class="register-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <router-link to="/" class="h1">
            {{ $t('signupPage.title') }}
          </router-link>
        </div>
        <div class="card-body">
          <p class="login-box-msg">{{ $t('signupPage.start') }}</p>
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
<!--          <div class="input-group mb-3">-->
<!--            <input type="password" class="form-control" placeholder="Confirm password" v-model="password">-->
<!--            <div class="input-group-append">-->
<!--              <div class="input-group-text">-->
<!--                <span class="fas fa-lock"></span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <p class="mb-3 text-center error-message" v-if="authStore.errorMessage">{{ authStore.errorMessage }}</p>
          <div class="row justify-content-end mb-3">
            <div class="col-5">
              <button class="btn btn-primary btn-block" @click="signUp">{{ $t('signupPage.button') }}</button>
            </div>
          </div>
          <p class="mb-3 text-center">
            {{ $t('signupPage.member') }} <router-link to="/login">{{ $t('signupPage.signin') }}</router-link>
          </p>

          <p class="mb-0 text-center lang" @click="changeLanguage">
            {{ $t('changeLanguage') }}
          </p>

<!--          <form action="../../index.html" method="post">-->
<!--            <div class="input-group mb-3">-->
<!--              <input type="text" class="form-control" placeholder="Full name">-->
<!--              <div class="input-group-append">-->
<!--                <div class="input-group-text">-->
<!--                  <span class="fas fa-user"></span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <input type="email" class="form-control" placeholder="Email">-->
<!--              <div class="input-group-append">-->
<!--                <div class="input-group-text">-->
<!--                  <span class="fas fa-envelope"></span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <input type="password" class="form-control" placeholder="Password">-->
<!--              <div class="input-group-append">-->
<!--                <div class="input-group-text">-->
<!--                  <span class="fas fa-lock"></span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <input type="password" class="form-control" placeholder="Retype password">-->
<!--              <div class="input-group-append">-->
<!--                <div class="input-group-text">-->
<!--                  <span class="fas fa-lock"></span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-8">-->
<!--                <div class="icheck-primary">-->
<!--                  <input type="checkbox" id="agreeTerms" name="terms" value="agree">-->
<!--                  <label for="agreeTerms">-->
<!--                    I agree to the <a href="#">terms</a>-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-4">-->
<!--                <button type="submit" class="btn btn-primary btn-block">Register</button>-->
<!--              </div>-->

<!--            </div>-->
<!--          </form>-->
<!--          <div class="social-auth-links text-center">-->
<!--            <a href="#" class="btn btn-block btn-primary">-->
<!--              <i class="fab fa-facebook mr-2"></i>-->
<!--              Sign up using Facebook-->
<!--            </a>-->
<!--            <a href="#" class="btn btn-block btn-danger">-->
<!--              <i class="fab fa-google-plus mr-2"></i>-->
<!--              Sign up using Google+-->
<!--            </a>-->
<!--          </div>-->
<!--          <a href="login.html" class="text-center">I already have a membership</a>-->
<!--        </div>-->
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

function signUp() {
  authStore.register();
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
  name: "RegisterPage"
}
</script>

<style scoped>
.register-page {
  color: #121212;
}
.error-message {
  color: red;
}
.lang {
  cursor: pointer;
}
</style>