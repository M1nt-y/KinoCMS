<template>
  <div class="seo">
    <p>SEO</p>
    <div class="seo__content">
      <div class="seo__content-item">
        <p>URL</p>
        <input class="form-control" type="text" placeholder="URL" :value="url" @input="$emit('update:url', $event.target.value)">
      </div>
      <div class="seo__content-item">
        <p>Title</p>
        <input class="form-control" type="text" placeholder="Title" :value="title" @input="$emit('update:title', $event.target.value)">
      </div>
      <div class="seo__content-item">
        <p>Keywords</p>
        <input class="form-control" type="text" placeholder="Keywords" :value="keywords" @input="$emit('update:keywords', $event.target.value)">
      </div>
      <div class="seo__content-item">
        <p>Description</p>
        <textarea class="form-control" placeholder="Description" :value="description" @input="$emit('update:description', $event.target.value)"/>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(['url', 'title', 'keywords', 'description'])

</script>

<script>
export default {
  name: "SeoInputs"
}
</script>

<style scoped>
.seo {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.seo__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.seo__content-item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.seo p,
.seo__content-item p {
  min-width: 85px;
}

p {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>