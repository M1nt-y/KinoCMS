<template>
  <div class="gallery">
    <div class="gallery__item" v-for="image in gallery" :key="image.id">
      <img class="gallery__item-preview" :src="image.url" alt="">
      <div class="gallery__item-delete" @click="emit('deleteImage', image.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g transform="scale(1.5)">
            <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
            <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
            <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
          </g>
        </svg>
      </div>
    </div>
    <label class="gallery__add">
      <span>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <input
          class="gallery__input"
          type="file" multiple="multiple" accept="image/*"
          @change="galleryImagesSelected($event)"
      >
    </label>
  </div>
</template>

<script setup>
defineProps(['gallery']);

const emit = defineEmits(['getImage', 'deleteImage'])

function galleryImagesSelected(input) {
  let images = input.target.files;
  for (let i = 0; i < images.length; i++) {
    emit('getImage', images[i]);
  }
}
</script>

<script>
export default {
  name: "ImageGallery"
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}
.gallery__item {
  position: relative;
}
.gallery__item-preview {
  width: 130px;
  height: 80px;
}
.gallery__add {
  cursor: pointer;
}
.gallery__item-delete {
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  z-index: 1;
}
.gallery__input {
  display: none;
}
</style>