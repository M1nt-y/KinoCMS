<template>
  <div class="one-news">
    <TheLoading v-show="newsStore.loading" />
    <div class="one-news__controls">
      <div class="one-news__status">
        Status:
        <input type="checkbox" id="checkbox" v-model="newsStore.newsList[id].status" />
        <label for="checkbox">{{ newsStore.newsList[id].status }}</label>
      </div>
      <div class="one-news__languages">
        <div class="one-news__languages-radio">
          <input type="radio" id="en" value="en" v-model="newsStore.newsList[id].language.selected">
          <label for="en">en</label>
        </div>
        <div class="one-news__languages-radio">
          <input type="radio" id="ua" value="ua" v-model="newsStore.newsList[id].language.selected">
          <label for="ua">ua</label>
        </div>
      </div>
    </div>
    <div class="one-news__wrapper">
      <div class="one-news__content">
        <div class="one-news__content-top">

          <div class="one-news__content-item">
            <p>Title</p>
            <input class="form-control" type="text" placeholder="Title" v-model="newsStore.newsList[id].data[newsStore.newsList[id].language.index].title">
          </div>

          <div class="one-news__content-item">
            <p>Publication date</p>
            <Datepicker
                v-model="newsStore.newsList[id].data[newsStore.newsList[id].language.index].publicationDate"
                close-on-scroll
            />
          </div>

        </div>
        <div class="one-news__content-item">
          <p>Description</p>
          <textarea class="form-control" placeholder="Description" v-model="newsStore.newsList[id].data[newsStore.newsList[id].language.index].description" />
        </div>
        <div class="one-news__content-item">
          <p>Main image</p>
          <ImageInput
              :input="newsStore.newsList[id].images[newsStore.newsList[id].language.index].main"
              @getImage="addMainImage"
          />
        </div>
        <div class="one-news__content-item">
          <p>Gallery</p>
          <ImageGallery
              :gallery="newsStore.newsList[id].images[newsStore.newsList[id].language.index].gallery"
              @getImage="addImage"
              @deleteImage="deleteImage"
          />
        </div>
        <div class="one-news__content-item">
          <p>Video link</p>
          <input class="form-control" type="text" placeholder="Link" v-model="newsStore.newsList[id].data[newsStore.newsList[id].language.index].videoLink">
        </div>
        <div class="one-news__content-item">
          <SeoInputs
              v-model:url="newsStore.newsList[id].data[newsStore.newsList[id].language.index].seo.url"
              v-model:title="newsStore.newsList[id].data[newsStore.newsList[id].language.index].seo.title"
              v-model:keywords="newsStore.newsList[id].data[newsStore.newsList[id].language.index].seo.keywords"
              v-model:description="newsStore.newsList[id].data[newsStore.newsList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="handleUpload(id)">Save</button>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useNewsStore } from "@/stores/news";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TheLoading from "@/components/admin/TheLoading";
import ImageGallery from "@/components/admin/ImageGallery";
import ImageInput from "@/components/admin/ImageInput";
import SeoInputs from "@/components/admin/SeoInputs";
import {useRouter} from "vue-router";

const router = useRouter();

const newsStore = useNewsStore();

const props = defineProps(['id', 'parent']);

watch(() => newsStore.newsList[props.id].language.selected, () => {
  if (newsStore.newsList[props.id].language.selected === 'en') {
    newsStore.newsList[props.id].language.index = 0;
  }
  else {
    newsStore.newsList[props.id].language.index = 1;
  }
});

function addMainImage(image) {
  let lang = newsStore.newsList[props.id].language.index;
  if (lang === 0) {
    newsStore.newsList[props.id].data[lang].main.name = newsStore.newsList[props.id].images[lang].main.name = newsStore.newsList[props.id].name + "-en";
  }
  else {
    newsStore.newsList[props.id].data[lang].main.name = newsStore.newsList[props.id].images[lang].main.name = newsStore.newsList[props.id].name + "-ua";
  }
  newsStore.newsList[props.id].images[lang].main.image = image;
  newsStore.newsList[props.id].images[lang].main.url = URL.createObjectURL(image);
  newsStore.newsList[props.id].images[lang].main.uploaded = false;
}
async function addImage(image) {
  await new Promise(resolve => setTimeout(resolve, 1));
  let lang = newsStore.newsList[props.id].language.index;
  let i = newsStore.newsList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    newsStore.newsList[props.id].data[lang].gallery.push({
      id: i,
      name: newsStore.newsList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  } else {
    newsStore.newsList[props.id].data[lang].gallery.push({
      id: i,
      name: newsStore.newsList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  newsStore.newsList[props.id].images[lang].gallery.push({
    id: i,
    name: newsStore.newsList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = newsStore.newsList[props.id].language.index;
  if (newsStore.newsList[props.id].images[lang].gallery[index].uploaded) {
    newsStore.newsList[props.id].images[lang].deleted.push(newsStore.newsList[props.id].images[lang].gallery[index].name)
  }
  newsStore.newsList[props.id].data[lang].gallery.splice(index, 1);
  newsStore.newsList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < newsStore.newsList[props.id].images[lang].gallery.length; i++) {
    if (newsStore.newsList[props.id].images[lang].gallery[i].id !== i) {
      newsStore.newsList[props.id].data[lang].gallery[i].id = newsStore.newsList[props.id].images[lang].gallery[i].id = i;
    }
  }
}
function handleUpload(id) {
  newsStore.uploadNews(id).then(() => {
    newsStore.uploadNewsData(id);
  });
}
watch(() => newsStore.uploaded, (value) => {
  if (value) {
    router.go(-1);
  }
});

</script>

<script>
export default {
  name: "AdminOneNews"
}
</script>

<style scoped>
.one-news {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.one-news__controls, .one-news__content-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.one-news__languages {
  display: flex;
}

.one-news__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.one-news__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.one-news__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.one-news__content-item p {
  min-width: 85px;
}

p, label {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>