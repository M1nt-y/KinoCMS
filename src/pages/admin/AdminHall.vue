<template>
  <div class="hall">
    <div class="hall__languages">
      <div class="cinema__languages-radio">
        <input type="radio" id="en" value="en" v-model="cinemaStore.cinemaList[parent].language.selected">
        <label for="en">en</label>
      </div>
      <div class="cinema__languages-radio">
        <input type="radio" id="ua" value="ua" v-model="cinemaStore.cinemaList[parent].language.selected">
        <label for="ua">ua</label>
      </div>
    </div>
    <div class="hall__wrapper">
      <div class="hall__content">

        <div class="hall__content-item">
          <p>Title</p>
          <input class="form-control" type="text" placeholder="Title" v-model="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].title">
        </div>

        <div class="hall__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].description" />
        </div>

        <div class="hall__content-item">
          <p>Scheme</p>
          <ImageInput
              :input="cinemaStore.cinemaList[parent].halls[id].images[cinemaStore.cinemaList[parent].language.index].scheme"
              @getImage="addScheme"
          />
        </div>

        <div class="hall__content-item">
          <p>Top banner</p>
          <ImageInput
              :input="cinemaStore.cinemaList[parent].halls[id].images[cinemaStore.cinemaList[parent].language.index].banner"
              @getImage="addBanner"
          />
        </div>

        <div class="hall__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="cinemaStore.cinemaList[parent].halls[id].images[cinemaStore.cinemaList[parent].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>

        <div class="hall__content-item">
          <SeoInputs
              v-model:url="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].seo.url"
              v-model:title="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].seo.title"
              v-model:keywords="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].seo.keywords"
              v-model:description="cinemaStore.cinemaList[parent].halls[id].data[cinemaStore.cinemaList[parent].language.index].seo.description"
          />
        </div>

      </div>
    </div>
    <button class="btn btn-primary" @click="$router.go(-1)">Save</button>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useCinemaStore } from "@/stores/cinemas";
import ImageInput from "@/components/admin/ImageInput";
import ImageGallery from "@/components/admin/ImageGallery";
import SeoInputs from "@/components/admin/SeoInputs";

const cinemaStore = useCinemaStore()

const props = defineProps(['id', 'parent'])

watch(() => cinemaStore.cinemaList[props.parent].language.selected, () => {
  if (cinemaStore.cinemaList[props.parent].language.selected === 'en') {
    cinemaStore.cinemaList[props.parent].language.index = 0;
  }
  else {
    cinemaStore.cinemaList[props.parent].language.index = 1;
  }
});

function addScheme(image) {
  let lang = cinemaStore.cinemaList[props.parent].language.index;
  if (lang === 0) {
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].scheme.name = cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].scheme.name = cinemaStore.cinemaList[props.parent].halls[props.id].name + "-en";
  }
  else {
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].scheme.name = cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].scheme.name = cinemaStore.cinemaList[props.parent].halls[props.id].name + "-ua";
  }
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].scheme.image = image;
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].scheme.url = URL.createObjectURL(image);
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].scheme.uploaded = false;
}

function addBanner(image) {
  let lang = cinemaStore.cinemaList[props.parent].language.index;
  if (lang === 0) {
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].banner.name = cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].banner.name = cinemaStore.cinemaList[props.parent].halls[props.id].name + "-en";
  }
  else {
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].banner.name = cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].banner.name = cinemaStore.cinemaList[props.parent].halls[props.id].name + "-ua";
  }
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].banner.image = image;
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].banner.url = URL.createObjectURL(image);
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].banner.uploaded = false;
}

function addImage(image) {
  let lang = cinemaStore.cinemaList[props.parent].language.index, i;
  if (lang === 0) {
    i = cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery.length;
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery.push({
      id: i,
      name: cinemaStore.cinemaList[props.parent].halls[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  }
  else {
    i = cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery.length;
    cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery.push({
      id: i,
      name: cinemaStore.cinemaList[props.parent].halls[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery.push({
    id: i,
    name: cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}

function deleteImage(index) {
  let lang = cinemaStore.cinemaList[props.parent].language.index;
  if (cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery[index].uploaded) {
    cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].deleted.push(cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery[index].name)
  }
  cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery.splice(index, 1);
  cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery.length; i++) {
    if (cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery[i].id !== i) {
      cinemaStore.cinemaList[props.parent].halls[props.id].data[lang].gallery[i].id = cinemaStore.cinemaList[props.parent].halls[props.id].images[lang].gallery[i].id = i;
    }
  }
}

</script>

<script>
export default {
  name: "AdminHall"
}
</script>

<style scoped>
.hall {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.hall__languages {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.hall__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.hall__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hall__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hall__content-item p {
  min-width: 85px;
}

p {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>