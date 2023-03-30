<template>
  <div class="cinema">
    <TheLoading v-show="cinemaStore.loading" />
    <div class="cinema__languages">
      <div class="cinema__languages-radio">
        <input type="radio" id="en" value="en" v-model="cinemaStore.cinemaList[id].language.selected">
        <label for="en">en</label>
      </div>
      <div class="cinema__languages-radio">
        <input type="radio" id="ua" value="ua" v-model="cinemaStore.cinemaList[id].language.selected">
        <label for="ua">ua</label>
      </div>
    </div>
    <div class="cinema__wrapper">
      <div class="cinema__content">
        <div class="cinema__content-item">
          <p>Title</p>
          <input class="form-control" type="text" placeholder="Title" v-model="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].title">
        </div>
        <div class="cinema__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].description" />
        </div>
        <div class="cinema__content-item">
          <p>Conditions</p>
          <textarea class="form-control" placeholder="Conditions" v-model="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].conditions" />
        </div>
        <div class="cinema__content-item">
          <p>Logo</p>
          <ImageInput
              :input="cinemaStore.cinemaList[id].images[cinemaStore.cinemaList[id].language.index].logo"
              @getImage="addLogo"
          />
        </div>
        <div class="cinema__content-item">
          <p>Top banner</p>
          <ImageInput
              :input="cinemaStore.cinemaList[id].images[cinemaStore.cinemaList[id].language.index].banner"
              @getImage="addBanner"
          />
        </div>
        <div class="cinema__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="cinemaStore.cinemaList[id].images[cinemaStore.cinemaList[id].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>
        <div class="cinema__content-item cinema__content-item--halls">
          <h2>List of halls</h2>
          <ItemList
              :route-name="'AdminHall'"
              :items="cinemaStore.cinemaList[id].halls"
              :parent="id.toString()"
              :show-modal="cinemaStore.showModal"
              @addItem="addHall"
              @toggleModal="cinemaStore.showModal = true"
              @closeModal="cinemaStore.showModal = false"
              @deleteItem="deleteHall"
          />
        </div>
        <div class="movie__content-item">
          <SeoInputs
              v-model:url="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].seo.url"
              v-model:title="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].seo.title"
              v-model:keywords="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].seo.keywords"
              v-model:description="cinemaStore.cinemaList[id].data[cinemaStore.cinemaList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="cinemaStore.uploadCinema(id)">Save</button>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useCinemaStore } from "@/stores/cinemas";
import ImageInput from "@/components/admin/ImageInput";
import ImageGallery from "@/components/admin/ImageGallery";
import SeoInputs from "@/components/admin/SeoInputs";
import ItemList from "@/components/admin/ItemList";
import TheLoading from "@/components/admin/TheLoading";
import {useRouter} from "vue-router";

const router = useRouter();

const cinemaStore = useCinemaStore();

const props = defineProps(['id']);

watch(() => cinemaStore.cinemaList[props.id].language.selected, () => {
  if (cinemaStore.cinemaList[props.id].language.selected === 'en') {
    cinemaStore.cinemaList[props.id].language.index = 0;
  }
  else {
    cinemaStore.cinemaList[props.id].language.index = 1;
  }
});

function addLogo(image) {
  let lang = cinemaStore.cinemaList[props.id].language.index;
  if (lang === 0) {
    cinemaStore.cinemaList[props.id].data[lang].logo.name = cinemaStore.cinemaList[props.id].images[lang].logo.name = cinemaStore.cinemaList[props.id].name + "-en";
  }
  else {
    cinemaStore.cinemaList[props.id].data[lang].logo.name = cinemaStore.cinemaList[props.id].images[lang].logo.name = cinemaStore.cinemaList[props.id].name + "-ua";
  }
  cinemaStore.cinemaList[props.id].images[lang].logo.image = image;
  cinemaStore.cinemaList[props.id].images[lang].logo.url = URL.createObjectURL(image);
  cinemaStore.cinemaList[props.id].images[lang].logo.uploaded = false;
}
function addBanner(image) {
  let lang = cinemaStore.cinemaList[props.id].language.index;
  if (lang === 0) {
    cinemaStore.cinemaList[props.id].data[lang].banner.name = cinemaStore.cinemaList[props.id].images[lang].banner.name = cinemaStore.cinemaList[props.id].name + "-en";
  }
  else {
    cinemaStore.cinemaList[props.id].data[lang].banner.name = cinemaStore.cinemaList[props.id].images[lang].banner.name = cinemaStore.cinemaList[props.id].name + "-ua";
  }
  cinemaStore.cinemaList[props.id].images[lang].banner.image = image;
  cinemaStore.cinemaList[props.id].images[lang].banner.url = URL.createObjectURL(image);
  cinemaStore.cinemaList[props.id].images[lang].banner.uploaded = false;
}
function addImage(image) {
  let lang = cinemaStore.cinemaList[props.id].language.index;
  let i = cinemaStore.cinemaList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    cinemaStore.cinemaList[props.id].data[lang].gallery.push({
      id: i,
      name: cinemaStore.cinemaList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  }
  else {
    cinemaStore.cinemaList[props.id].data[lang].gallery.push({
      id: i,
      name: cinemaStore.cinemaList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  cinemaStore.cinemaList[props.id].images[lang].gallery.push({
    id: i,
    name: cinemaStore.cinemaList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = cinemaStore.cinemaList[props.id].language.index;
  if (cinemaStore.cinemaList[props.id].images[lang].gallery[index].uploaded) {
    cinemaStore.cinemaList[props.id].images[lang].deleted.push(cinemaStore.cinemaList[props.id].images[lang].gallery[index].name)
  }
  cinemaStore.cinemaList[props.id].data[lang].gallery.splice(index, 1);
  cinemaStore.cinemaList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < cinemaStore.cinemaList[props.id].images[lang].gallery.length; i++) {
    if (cinemaStore.cinemaList[props.id].images[lang].gallery[i].id !== i) {
      cinemaStore.cinemaList[props.id].data[lang].gallery[i].id = cinemaStore.cinemaList[props.id].images[lang].gallery[i].id = i;
    }
  }
}

function addHall() {
  cinemaStore.cinemaList[props.id].halls.push({
    id: cinemaStore.cinemaList[props.id].halls.length,
    name: 'hall-' + Date.now(),
    creationDate: Date.now(),
    uploaded: false,
    data: [
      {
        title: '',
        description: '',
        scheme: {
          name: null,
          url: null
        },
        banner: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      },
      {
        title: '',
        description: '',
        scheme: {
          name: null,
          url: null
        },
        banner: {
          name: null,
          url: null
        },
        gallery: [],
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: ''
        },
      }
    ],
    images: [
      {
        scheme: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        banner: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      },
      {
        scheme: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        banner: {
          name: null,
          image: null,
          url: null,
          uploaded: false
        },
        gallery: [],
        deleted: []
      }
    ]
  });
  router.push({
    name: 'AdminHall',
    params: {
      id: cinemaStore.cinemaList[props.id].halls.length-1,
      parent: props.id
    }
  });
}
function deleteHall(i) {
  if (cinemaStore.cinemaList[props.id].halls[i].uploaded) {
    cinemaStore.cinemaList[props.id].deletedHalls.push(cinemaStore.cinemaList[props.id].halls[i])
  }
  cinemaStore.cinemaList[props.id].halls.splice(i, 1);
  for (let j = 0; j < cinemaStore.cinemaList[props.id].halls.length; j++) {
    if (cinemaStore.cinemaList[props.id].halls[j].id !== j) {
      cinemaStore.cinemaList[props.id].halls[j].id = j;
    }
  }
}

watch(() => cinemaStore.uploaded, (value) => {
  if (value) {
    router.go(-1);
  }
});

</script>

<script>
export default {
  name: "AdminCinema"
}
</script>

<style scoped>
.cinema {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cinema__languages {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.cinema__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.cinema__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cinema__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.cinema__content-item p {
  min-width: 85px;
}

.cinema__content-item--halls {
  flex-direction: column;
}

p {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>