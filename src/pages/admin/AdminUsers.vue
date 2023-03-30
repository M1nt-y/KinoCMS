<template>
  <div class="users">
    <TheLoading v-show="usersStore.loading" />
    <h2 v-if="$route.name !== 'ChooseUsers'">List of users</h2>
    <div class="users__search">
      <input class="form-control" type="text" placeholder="Search" v-model="searchInput" />
    </div>
    <ItemList
        :route-name="'User'"
        :items="paginatedUsers"
        :show-modal="usersStore.showModal"
        :search = "searchInput"
        @toggleModal="usersStore.showModal = true"
        @closeModal="usersStore.showModal = false"
        @deleteItem="usersStore.deleteUser"
        @sortArray="sortArray"
    />
    <ThePagination
        :totalPages="pages"
        :currentPage="currentPage"
        @changePage="updatePage"
    />
    <button v-if="$route.name === 'ChooseUsers'" @click="$router.go(-1)">Confirm selection</button>
  </div>
</template>

<script setup>
import {useUsersStore} from "@/stores/users";
import TheLoading from "@/components/admin/TheLoading";
import ItemList from "@/components/admin/ItemList";
import ThePagination from "@/components/ThePagination";
import {onBeforeMount, reactive, ref, watch, computed} from "vue";


let users = reactive([]);
const usersStore = useUsersStore();
usersStore.getUsers();
onBeforeMount(() => {
  users = usersStore.usersList;
});


const usersPerPage = ref(5);
const currentPage = ref(1);


const sortingBy = ref('');
const sortingDirection = ref(false);
function sortArray(field, direction) {
  users = usersStore.usersList;
  sortingBy.value = field;
  sortingDirection.value = direction;
  currentPage.value = 1;
}
const sortedUsers = computed(() => {
  let arrayToSort = users;
  if (sortingBy.value.includes('registrationDate')) {
    if (!sortingDirection.value) {
     return arrayToSort.sort((a, b) => (new Date(a.registrationDate) - new Date(b.registrationDate)))
    }
    else {
      return arrayToSort.sort((a, b) => (new Date(b.registrationDate) - new Date(a.registrationDate)))
    }
  }
  else if (sortingBy.value.includes('birthday')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.birthday - b.birthday))
    }
    else {
      return arrayToSort.sort((a, b) => (b.birthday - a.birthday))
    }
  }
  else if (sortingBy.value.includes('email')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.email > b.email ? 1 : -1))
    }
    else {
      return arrayToSort.sort((a, b) => (b.email > a.email ? 1 : -1))
    }
  }
  else if (sortingBy.value.includes('phone')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.phone - b.phone))
    }
    else {
      return arrayToSort.sort((a, b) => (b.phone - a.phone))
    }
  }
  else if (sortingBy.value.includes('fullName')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : -1))
    }
    else {
      return arrayToSort.sort((a, b) => (b.fullName.toLowerCase() > a.fullName.toLowerCase() ? 1 : -1))
    }
  }
  else if (sortingBy.value.includes('username')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.username > b.username ? 1 : -1))
    }
    else {
      return arrayToSort.sort((a, b) => (b.username > a.username ? 1 : -1))
    }
  }
  else if (sortingBy.value.includes('city')) {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.city > b.city ? 1 : -1))
    }
    else {
      return arrayToSort.sort((a, b) => (b.city > a.city ? 1 : -1))
    }
  }
  else {
    if (!sortingDirection.value) {
      return arrayToSort.sort((a, b) => (a.id > b.id ? 1 : -1))
    }
    else {
      return arrayToSort.sort((a, b) => (b.id > a.id ? 1 : -1))
    }
  }
});



const searchInput = ref('');
const searchFields = ['id','registrationDate','birthday','email','phone','fullName','username','city'];
watch(() => searchInput.value, (input) => {
  currentPage.value = 1;
  if (input === '') {
    users = usersStore.usersList;
  }
});
const searchedUsers = computed(() => {
  let arrayToSearch = [];
  sortedUsers.value.filter( (user) => {
    let str = ''
    for (let field in user) {
      searchFields.forEach((searchField) => {
        if (searchField === field) {
          str += user[field] + ' ';
        }
      });
    }
    if (str.toLowerCase().includes(searchInput.value.toLowerCase())) {
      arrayToSearch.push(user)
    }
  });
  return arrayToSearch;
});



const pages = computed(() => {
  return Math.ceil(searchedUsers.value.length / usersPerPage.value);
});
function updatePage(page) {
  if (page === 'previous') {
    currentPage.value--;
  }
  else if (page === 'next') {
    currentPage.value++;
  }
  else {
    currentPage.value = page;
  }
}
const paginatedUsers = computed(() => {
  let from = (currentPage.value - 1) * usersPerPage.value;
  let to = from + usersPerPage.value;
  return searchedUsers.value.slice(from, to)
});

</script>

<script>
export default {
  name: "AdminUsers",
}
</script>

<style scoped>
.users {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.users__search {
  width: 100%;
}
/*input {*/
/*  max-width: 500px;*/
/*}*/
</style>