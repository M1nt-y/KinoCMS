<template>
  <div class="page">
    <div class="container">
      <h2 class="text-center mt-4">Profile</h2>
      <EditUser :id="currentId" />
    </div>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {useUsersStore} from "@/stores/users";
import EditUser from "@/components/EditUser";


const usersStore = useUsersStore();
const currentUser = ref({});
const currentId = ref(null)

onBeforeMount(() => {
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'));
  usersStore.getUsers().then(() => {
    usersStore.usersList.forEach((user) => {
      if (user.email === currentUser.value.email) {
        currentId.value = user.id
      }
    });
  });
});

</script>

<script>
export default {
  name: "ProfilePage"
}
</script>

<style scoped>

</style>