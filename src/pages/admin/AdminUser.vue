<template>
  <div class="user">
    <TheLoading v-show="usersStore.loading" />
    <EditUser :id="id" />
  </div>
</template>

<script setup>
import {useUsersStore} from "@/stores/users";
import TheLoading from "@/components/admin/TheLoading";
import EditUser from "@/components/EditUser";

const usersStore = useUsersStore();

defineProps(['id', 'parent']);
// const props = defineProps(['id', 'parent']);

</script>

<script>
export default {
  name: "AdminUser"
}
</script>

<style scoped>
.user {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>