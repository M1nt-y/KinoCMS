<template>
  <div class="movie">
    <TheLoading v-show="movieStore.loading" />
    <div class="movie__languages">
      <div class="movie__languages-radio">
        <input type="radio" id="en" value="en" v-model="movieStore.movieList[id].language.selected">
        <label for="en">en</label>
      </div>
      <div class="movie__languages-radio">
        <input type="radio" id="ua" value="ua" v-model="movieStore.movieList[id].language.selected">
        <label for="ua">ua</label>
      </div>
    </div>
    <div class="movie__wrapper">
      <div class="movie__content">
        <div class="movie__content-item">
          <p>Title</p>
          <input class="form-control" type="text" placeholder="Title" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].title">
        </div>
        <div class="movie__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].description" />
        </div>
        <div class="movie__content-item">
          <p>Main image</p>
          <ImageInput
              :input="movieStore.movieList[id].images[movieStore.movieList[id].language.index].main"
              @getImage="addMainImage"
          />
        </div>
        <div class="movie__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="movieStore.movieList[id].images[movieStore.movieList[id].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>
        <div class="movie__content-item">
          <p>Trailer link</p>
          <input class="form-control" type="text" placeholder="Link" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].trailer">
        </div>
        <div class="movie__content-item">
          <p>Type</p>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="2d" value="2d" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].type">
            <label for="2d">2D</label>
          </div>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="3d" value="3d" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].type">
            <label for="3d">3D</label>
          </div>
          <div class="movie__content-checkbox">
            <input type="checkbox" id="imax" value="imax" v-model="movieStore.movieList[id].data[movieStore.movieList[id].language.index].type">
            <label for="imax">IMAX</label>
          </div>
        </div>
        <div class="movie__content-item">
          <SeoInputs
              v-model:url="movieStore.movieList[id].data[movieStore.movieList[id].language.index].seo.url"
              v-model:title="movieStore.movieList[id].data[movieStore.movieList[id].language.index].seo.title"
              v-model:keywords="movieStore.movieList[id].data[movieStore.movieList[id].language.index].seo.keywords"
              v-model:description="movieStore.movieList[id].data[movieStore.movieList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <div class="movie__buttons">
      <button class="btn btn-primary" @click="handleUpload(id)">Save</button>
      <button class="btn btn-default" @click="movieStore.resetMovie(id)" v-if="movieStore.movieList[id].uploaded">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import TheLoading from "@/components/admin/TheLoading";
import { useMovieStore } from "@/stores/movies";
import ImageGallery from "@/components/admin/ImageGallery";
import ImageInput from "@/components/admin/ImageInput";
import SeoInputs from "@/components/admin/SeoInputs";
import {useRouter} from "vue-router";

const router = useRouter();

const movieStore = useMovieStore();

const props = defineProps(['id']);

watch(() => movieStore.movieList[props.id].language.selected, () => {
  if (movieStore.movieList[props.id].language.selected === 'en') {
    movieStore.movieList[props.id].language.index = 0;
  }
  else {
    movieStore.movieList[props.id].language.index = 1;
  }
});

function addMainImage(image) {
  let lang = movieStore.movieList[props.id].language.index;
  if (lang === 0) {
    movieStore.movieList[props.id].data[lang].main.name = movieStore.movieList[props.id].images[lang].main.name = movieStore.movieList[props.id].name + "-en";
  }
  else {
    movieStore.movieList[props.id].data[lang].main.name = movieStore.movieList[props.id].images[lang].main.name = movieStore.movieList[props.id].name + "-ua";
  }
  movieStore.movieList[props.id].images[lang].main.image = image;
  movieStore.movieList[props.id].images[lang].main.url = URL.createObjectURL(image);
  movieStore.movieList[props.id].images[lang].main.uploaded = false;
}
async function addImage(image) {
  await new Promise(resolve => setTimeout(resolve, 1));
  let lang = movieStore.movieList[props.id].language.index;
  let i = movieStore.movieList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    movieStore.movieList[props.id].data[lang].gallery.push({
      id: i,
      name: movieStore.movieList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  } else {
    movieStore.movieList[props.id].data[lang].gallery.push({
      id: i,
      name: movieStore.movieList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  movieStore.movieList[props.id].images[lang].gallery.push({
    id: i,
    name: movieStore.movieList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = movieStore.movieList[props.id].language.index;
  if (movieStore.movieList[props.id].images[lang].gallery[index].uploaded) {
    movieStore.movieList[props.id].images[lang].deleted.push(movieStore.movieList[props.id].images[lang].gallery[index].name)
  }
  movieStore.movieList[props.id].data[lang].gallery.splice(index, 1);
  movieStore.movieList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < movieStore.movieList[props.id].images[lang].gallery.length; i++) {
    if (movieStore.movieList[props.id].images[lang].gallery[i].id !== i) {
      movieStore.movieList[props.id].data[lang].gallery[i].id = movieStore.movieList[props.id].images[lang].gallery[i].id = i;
    }
  }
}

function handleUpload(id) {
  movieStore.uploadMovie(id).then(() => {
    movieStore.uploadMovieData(id);
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
  name: "AdminMovie"
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