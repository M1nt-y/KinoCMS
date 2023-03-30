<template>
  <div class="user" v-if="id !== null">
    <div class="user__wrapper">
      <div class="user__content">
        <div class="user__content-item">
          <p>Full name</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.name')" v-model="usersStore.usersList[id].fullName">
        </div>
        <div class="user__content-item">
          <p>Username</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.username')" v-model="usersStore.usersList[id].username">
        </div>
        <div class="user__content-item">
          <p>Email</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.email')" v-model="usersStore.usersList[id].emailChange">
        </div>
        <div class="user__content-item">
          <p>Phone number</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.phone')" v-model="usersStore.usersList[id].phone">
        </div>
        <div class="user__content-item">
          <p>Birthday</p>
          <Datepicker
              :placeholder="$t('placeholders.birthday')"
              v-model="usersStore.usersList[id].birthday"
              :enable-time-picker="false"
              close-on-scroll
          />
        </div>
        <div class="user__content-item">
          <p>Credit card</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.card')" v-model="usersStore.usersList[id].creditCard">
        </div>
      </div>
      <div class="user__content">
        <div class="user__content-item">
          <p>Preferred language</p>
          <div class="user__languages">
            <div class="user__languages-radio">
              <input type="radio" id="en" value="en" v-model="usersStore.usersList[id].language">
              <label for="en">en</label>
            </div>
            <div class="user__languages-radio">
              <input type="radio" id="ua" value="ua" v-model="usersStore.usersList[id].language">
              <label for="ua">ua</label>
            </div>
          </div>
        </div>
        <div class="user__content-item">
          <p>Gender</p>
          <div class="user__genders">
            <div class="user__genders-radio">
              <input type="radio" id="male" value="male" v-model="usersStore.usersList[id].gender">
              <label for="male">male</label>
            </div>
            <div class="user__genders-radio">
              <input type="radio" id="female" value="female" v-model="usersStore.usersList[id].gender">
              <label for="female">female</label>
            </div>
          </div>
        </div>
        <div class="user__content-item">
          <p>City</p>
          <select class="form-control" v-model="usersStore.usersList[id].city">
            <option disabled value="">Choose city</option>
            <option>Sumy</option>
            <option>Kyiv</option>
            <option>Lviv</option>
            <option>Odesa</option>
            <option>Dnipro</option>
            <option>Kharkiv</option>
          </select>
        </div>
        <div class="user__content-item">
          <p>Address</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.address')" v-model="usersStore.usersList[id].address">
        </div>
        <div class="user__content-item">
          <p>Password</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.password')" v-model="usersStore.usersList[id].passwordChange">
        </div>
        <div class="user__content-item">
          <p>Repeat password</p>
          <input class="form-control" type="text" :placeholder="$t('placeholders.repeat')" v-model="usersStore.usersList[id].passwordCheck">
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="usersStore.saveUser(id)">Save</button>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import {useUsersStore} from "@/stores/users";
import {useRoute, useRouter} from "vue-router";
import {watch} from "vue";

const router = useRouter();
const route = useRoute()
const usersStore = useUsersStore();

defineProps({
  id: {
    type: Number,
    default: null
  }
});

watch(() => usersStore.uploaded, (value) => {
  if (value && route.name !== 'Profile') {
    router.go(-1);
  }
});

</script>

<script>
export default {
  name: "EditUser"
}
</script>

<style scoped>
.user {
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.user__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
}
.user__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.user__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user__content-item p {
  min-width: 140px;
}

.dp__main {
  width: 100%;
}

.user__languages,
.user__genders {
  display: flex;
}
p, label {
  margin: 0;
}
</style>