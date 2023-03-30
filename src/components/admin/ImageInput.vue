<template>
  <label class="image">
    <img class="image__preview" src="@/assets/images/image-icon.png" alt="" v-if="input.url === null">
    <img class="image__preview" :src="input.url" alt="" v-else>
    <input type="file" class="image__input" accept="image/*" @change="imageSelected($event)" />
  </label>
</template>

<script setup>
defineProps(['input'])

const emit = defineEmits(['getImage'])

function imageSelected(image) {
  if (image) {
    let file = image.target.files[0];
    emit('getImage', file);
  }
}
</script>

<script>
export default {
  name: "ImageInput"
}
</script>

<style scoped>
.image__preview {
  max-width: 130px;
}
.image__input {
  display: none;
}
</style>