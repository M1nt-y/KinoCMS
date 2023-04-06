<template>
  <div class="offer">
    <TheLoading v-show="specialsStore.loading" />
    <div class="offer__controls">
      <div class="offer__status">
        Status:
        <input type="checkbox" id="checkbox" v-model="specialsStore.offerList[id].status" />
        <label for="checkbox">{{ specialsStore.offerList[id].status }}</label>
      </div>
      <div class="offer__languages">
        <div class="offer__languages-radio">
          <input type="radio" id="en" value="en" v-model="specialsStore.offerList[id].language.selected">
          <label for="en">en</label>
        </div>
        <div class="offer__languages-radio">
          <input type="radio" id="ua" value="ua" v-model="specialsStore.offerList[id].language.selected">
          <label for="ua">ua</label>
        </div>
      </div>
    </div>
    <div class="offer__wrapper">
      <div class="offer__content">
        <div class="offer__content-top">
          <div class="offer__content-item">
            <p>Title</p>
            <input class="form-control" type="text" placeholder="Title" v-model="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].title">
          </div>
          <div class="offer__content-item">
            <p>Publication date</p>
            <Datepicker
                v-model="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].publicationDate"
                close-on-scroll
            />
          </div>
        </div>
        <div class="offer__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].description" />
        </div>
        <div class="offer__content-item">
          <p>Main image</p>
          <ImageInput
              :input="specialsStore.offerList[id].images[specialsStore.offerList[id].language.index].main"
              @getImage="addMainImage"
          />
        </div>
        <div class="offer__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="specialsStore.offerList[id].images[specialsStore.offerList[id].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>
        <div class="offer__content-item">
          <p>Video link</p>
          <input class="form-control" type="text" placeholder="Link" v-model="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].videoLink">
        </div>
        <div class="offer__content-item">
          <SeoInputs
              v-model:url="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].seo.url"
              v-model:title="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].seo.title"
              v-model:keywords="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].seo.keywords"
              v-model:description="specialsStore.offerList[id].data[specialsStore.offerList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="handleUpload(id)">Save</button>
  </div>
</template>

<script setup>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TheLoading from "@/components/admin/TheLoading";
import ImageInput from "@/components/admin/ImageInput";
import ImageGallery from "@/components/admin/ImageGallery";
import SeoInputs from "@/components/admin/SeoInputs";
import {useSpecialsStore} from "@/stores/specials";
import {watch} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const specialsStore = useSpecialsStore();

const props = defineProps(['id', 'parent']);

watch(() => specialsStore.offerList[props.id].language.selected, () => {
  if (specialsStore.offerList[props.id].language.selected === 'en') {
    specialsStore.offerList[props.id].language.index = 0;
  }
  else {
    specialsStore.offerList[props.id].language.index = 1;
  }
});

function addMainImage(image) {
  let lang = specialsStore.offerList[props.id].language.index;
  if (lang === 0) {
    specialsStore.offerList[props.id].data[lang].main.name = specialsStore.offerList[props.id].images[lang].main.name = specialsStore.offerList[props.id].name + "-en";
  }
  else {
    specialsStore.offerList[props.id].data[lang].main.name = specialsStore.offerList[props.id].images[lang].main.name = specialsStore.offerList[props.id].name + "-ua";
  }
  specialsStore.offerList[props.id].images[lang].main.image = image;
  specialsStore.offerList[props.id].images[lang].main.url = URL.createObjectURL(image);
  specialsStore.offerList[props.id].images[lang].main.uploaded = false;
}
async function addImage(image) {
  await new Promise(resolve => setTimeout(resolve, 1));
  let lang = specialsStore.offerList[props.id].language.index;
  let i = specialsStore.offerList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    specialsStore.offerList[props.id].data[lang].gallery.push({
      id: i,
      name: specialsStore.offerList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  } else {
    specialsStore.offerList[props.id].data[lang].gallery.push({
      id: i,
      name: specialsStore.offerList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  specialsStore.offerList[props.id].images[lang].gallery.push({
    id: i,
    name: specialsStore.offerList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = specialsStore.offerList[props.id].language.index;
  if (specialsStore.offerList[props.id].images[lang].gallery[index].uploaded) {
    specialsStore.offerList[props.id].images[lang].deleted.push(specialsStore.offerList[props.id].images[lang].gallery[index].name)
  }
  specialsStore.offerList[props.id].data[lang].gallery.splice(index, 1);
  specialsStore.offerList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < specialsStore.offerList[props.id].images[lang].gallery.length; i++) {
    if (specialsStore.offerList[props.id].images[lang].gallery[i].id !== i) {
      specialsStore.offerList[props.id].data[lang].gallery[i].id = specialsStore.offerList[props.id].images[lang].gallery[i].id = i;
    }
  }
}

function handleUpload(id) {
  specialsStore.uploadOffer(id).then(() => {
    specialsStore.uploadOfferData(id);
  })
}

watch(() => specialsStore.uploaded, (value) => {
  if (value) {
    router.go(-1);
  }
});
</script>

<script>
export default {
  name: "AdminSpecialOffer"
}
</script>

<style scoped>
.offer {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.offer__controls, .offer__content-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.offer__languages {
  display: flex;
}

.offer__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.offer__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.offer__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.offer__content-item p {
  min-width: 85px;
}

p, label {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>