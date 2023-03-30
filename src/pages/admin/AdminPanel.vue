<template>
  <div class="admin">
    <TheLoading v-show="statisticsStore.loading" />
    <div class="col-lg-3 col-6">

      <div class="small-box bg-warning">
        <div class="inner">
          <h3>{{ usersStore.usersList.length }}</h3>
          <p>User Registrations</p>
        </div>
        <div class="icon">
          <i class="fas fa-user-plus"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import TheLoading from "@/components/admin/TheLoading";
import { useStatisticsStore } from "@/stores/statistics";
import {useUsersStore} from "@/stores/users";

const statisticsStore = useStatisticsStore();
const usersStore = useUsersStore();

usersStore.getUsers();

</script>

<script>
export default {
  name: "AdminPanel",
}
</script>

<style scoped>
.admin {
  padding: 40px;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  gap: 20px;
}
</style>