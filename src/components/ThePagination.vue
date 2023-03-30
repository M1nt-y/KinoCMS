<template>
  <ul class="pagination" v-if="totalPages > 1">
    <li class="paginate_button page-item previous" :class="{disabled: currentPage===1}" id="example1_previous" >
      <button class="page-link" :disabled="currentPage === 1" @click="$emit('changePage', 'previous')">Previous</button>
    </li>
    <li class="paginate_button page-item" :class="{active: currentPage===page}" v-for="page in totalPages" :key="page" @click="$emit('changePage', page)">
      <p class="page-link">{{page}}</p>
    </li>
    <li class="paginate_button page-item next" :class="{disabled: currentPage===totalPages}" id="example1_next" >
      <button class="page-link" :disabled="currentPage === totalPages" @click="$emit('changePage', 'next')">Next</button>
    </li>
  </ul>
</template>

<script setup>

defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

</script>

<script>
export default {
  name: "ThePagination"
}
</script>

<style scoped>
.page-link {
  cursor: pointer;
  margin: 0;
}
</style>