<template>
  <div class="movie">
    <TheLoading v-show="movieStore.loading" />
    <div class="movie__languages">
      <div class="movie__languages-radio">
        <input type="radio" id="en" value="en" v-model="movieStore.upcomingList[id].language.selected">
        <label for="en">en</label>
      </div>
      <div class="movie__languages-radio">
        <input type="radio" id="ua" value="ua" v-model="movieStore.upcomingList[id].language.selected">
        <label for="ua">ua</label>
      </div>
    </div>
    <div class="movie__wrapper">
      <div class="movie__content">
        <div class="movie__content-item">
          <p>Title</p>
          <input class="form-control" type="text" placeholder="Title" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].title">
        </div>
        <div class="movie__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].description" />
        </div>
        <div class="movie__content-item">
          <p>Main image</p>
          <ImageInput
              :input="movieStore.upcomingList[id].images[movieStore.upcomingList[id].language.index].main"
              @getImage="addMainImage"
          />
        </div>
        <div class="movie__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="movieStore.upcomingList[id].images[movieStore.upcomingList[id].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>
        <div class="movie__content-item">
          <p>Screening date</p>
          <Datepicker
              v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].screeningDate"
              :enable-time-picker="false"
              placeholder="Screening date"
              close-on-scroll
          />
        </div>
        <div class="movie__content-item">
          <p>Trailer link</p>
          <input class="form-control" type="text" placeholder="Link" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].trailer">
        </div>
        <div class="movie__content-item">
          <p>Type</p>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="2d" value="2d" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].type">
            <label for="2d">2D</label>
          </div>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="3d" value="3d" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].type">
            <label for="3d">3D</label>
          </div>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="imax" value="imax" v-model="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].type">
            <label for="imax">IMAX</label>
          </div>
        </div>
        <div class="movie__content-item">
          <SeoInputs
              v-model:url="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].seo.url"
              v-model:title="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].seo.title"
              v-model:keywords="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].seo.keywords"
              v-model:description="movieStore.upcomingList[id].data[movieStore.upcomingList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <div class="movie__buttons">
      <button class="btn btn-primary" @click="handleUpload(id)">Save</button>
      <button class="btn btn-default" @click="movieStore.resetUpcoming(id)" v-if="movieStore.upcomingList[id].uploaded">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import TheLoading from "@/components/admin/TheLoading";
import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import { useMovieStore } from "@/stores/movies";
import ImageGallery from "@/components/admin/ImageGallery";
import ImageInput from "@/components/admin/ImageInput";
import SeoInputs from "@/components/admin/SeoInputs";
import {useRouter} from "vue-router";

const router = useRouter();

const movieStore = useMovieStore();

const props = defineProps(['id']);

watch(() => movieStore.upcomingList[props.id].language.selected, () => {
  if (movieStore.upcomingList[props.id].language.selected === 'en') {
    movieStore.upcomingList[props.id].language.index = 0;
  }
  else {
    movieStore.upcomingList[props.id].language.index = 1;
  }
});

function addMainImage(image) {
  let lang = movieStore.upcomingList[props.id].language.index;
  if (lang === 0) {
    movieStore.upcomingList[props.id].data[lang].main.name = movieStore.upcomingList[props.id].images[lang].main.name = movieStore.upcomingList[props.id].name + "-en";
  }
  else {
    movieStore.upcomingList[props.id].data[lang].main.name = movieStore.upcomingList[props.id].images[lang].main.name = movieStore.upcomingList[props.id].name + "-ua";
  }
  movieStore.upcomingList[props.id].images[lang].main.image = image;
  movieStore.upcomingList[props.id].images[lang].main.url = URL.createObjectURL(image);
  movieStore.upcomingList[props.id].images[lang].main.uploaded = false;
}
async function addImage(image) {
  await new Promise(resolve => setTimeout(resolve, 1));
  let lang = movieStore.upcomingList[props.id].language.index;
  let i = movieStore.upcomingList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    movieStore.upcomingList[props.id].data[lang].gallery.push({
      id: i,
      name: movieStore.upcomingList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  } else {
    movieStore.upcomingList[props.id].data[lang].gallery.push({
      id: i,
      name: movieStore.upcomingList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  movieStore.upcomingList[props.id].images[lang].gallery.push({
    id: i,
    name: movieStore.upcomingList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = movieStore.upcomingList[props.id].language.index;
  if (movieStore.upcomingList[props.id].images[lang].gallery[index].uploaded) {
    movieStore.upcomingList[props.id].images[lang].deleted.push(movieStore.upcomingList[props.id].images[lang].gallery[index].name)
  }
  movieStore.upcomingList[props.id].data[lang].gallery.splice(index, 1);
  movieStore.upcomingList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < movieStore.upcomingList[props.id].images[lang].gallery.length; i++) {
    if (movieStore.upcomingList[props.id].images[lang].gallery[i].id !== i) {
      movieStore.upcomingList[props.id].data[lang].gallery[i].id = movieStore.upcomingList[props.id].images[lang].gallery[i].id = i;
    }
  }
}

function handleUpload(id) {
  movieStore.uploadUpcoming(id).then(() => {
    movieStore.uploadUpcomingData(id);
  });
}

watch(() => movieStore.uploaded, (value) => {
  if (value) {
    router.go(-1);
  }
});
</script>

<script>
export default {
  name: "AdminUpcoming"
}
</script>

<style scoped>
.movie {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.movie__languages {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.movie__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.movie__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.movie__content-item p {
  min-width: 85px;
}

.movie__buttons {
  display: flex;
  justify-content: center;
}

p, label {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>