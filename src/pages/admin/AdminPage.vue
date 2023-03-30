<template>
  <div class="page">
    <TheLoading v-show="pagesStore.loading || cinemaStore.loading" />
    <div class="page__controls">
      <div class="page__status">
        <input type="checkbox" id="checkbox" v-model="pagesStore.pagesList[id].status" />
        <label for="checkbox">{{ pagesStore.pagesList[id].status }}</label>
      </div>
      <div class="page__languages">
        <div class="page__languages-radio">
          <input type="radio" id="en" value="en" v-model="pagesStore.pagesList[id].language.selected">
          <label for="en">en</label>
        </div>
        <div class="page__languages-radio">
          <input type="radio" id="ua" value="ua" v-model="pagesStore.pagesList[id].language.selected">
          <label for="ua">ua</label>
        </div>
      </div>
    </div>
    <div class="page__wrapper">
      <div class="page__content">
        <div class="page__content-item">
          <p>Title</p>
          <input
              class="form-control"
              type="text" placeholder="Title"
              v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].title"
          >
        </div>
        <div class="page__content-item">
          <p>Route name</p>
          <input
              class="form-control"
              type="text" placeholder="Route name"
              v-model="pagesStore.pagesList[id].routeName"
          >
        </div>

        <div class="page__content" v-if="pagesStore.pagesList[id].name.includes('home') ">
          <div class="page__content-item phone">
            <p>Phone number</p>
            <div class="phone__inputs">
              <input
                  class="form-control"
                  type="text" placeholder="Phone number"
                  v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].phone[0]"
              >
              <input
                  class="form-control"
                  type="text" placeholder="Phone number"
                  v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].phone[1]"
              >
            </div>
          </div>
          <div class="page__content-item">
            <p>SEO text</p>
            <textarea class="form-control" placeholder="SEO text" v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].seoText" />
          </div>
        </div>
        <div class="page__content" v-else-if="pagesStore.pagesList[id].name.includes('contacts')">
          <div class="page__content" v-if="cinemasLoaded">
            <div class="page__content page__content-cinema" v-for="(cinema, index) in cinemaStore.cinemaList" :key="index">
              <div class="page__content-item">
                <p>Cinema title</p>
                <input
                    class="form-control"
                    type="text" placeholder="Title"
                    v-model="cinema.data[pagesStore.pagesList[id].language.index].title"
                    disabled
                >
              </div>
              <div class="page__content-item">
                <p>Address</p>
                <textarea class="form-control" placeholder="Address" v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].cinemas[index].address" />
              </div>
              <div class="page__content-item">
                <p>Coordinate</p>
                <input
                    class="form-control"
                    type="text" placeholder="Coordinate"
                    v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].cinemas[index].coordinate"
                >
              </div>
              <div class="page__content-item">
                <p>Logo</p>
                <img class="image__preview" src="@/assets/images/image-icon.png" alt="" v-if="cinema.images[pagesStore.pagesList[id].language.index].logo.url === null">
                <img class="image__preview" :src="cinema.images[pagesStore.pagesList[id].language.index].logo.url" alt="" v-else>
              </div>
            </div>
          </div>
          <div class="page__content" v-else>
            <p>Cinemas not found. Create cinemas first</p>
            <router-link :to="{name: 'AdminCinemas'}">Go to cinemas page</router-link>
          </div>
        </div>
        <div class="page__content" v-else-if="!pagesStore.pagesList[id].name.includes('movies') && !pagesStore.pagesList[id].name.includes('schedule') && !pagesStore.pagesList[id].name.includes('upcoming') && !pagesStore.pagesList[id].name.includes('cinemas') && !pagesStore.pagesList[id].name.includes('specials') && !pagesStore.pagesList[id].name.includes('news')">
          <div class="page__content-item">
            <p>Description</p>
            <textarea class="form-control" placeholder="Description" v-model="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].description" />
          </div>
          <div class="page__content-item">
            <p>Main image</p>
            <ImageInput
                :input="pagesStore.pagesList[id].images[pagesStore.pagesList[id].language.index].main"
                @getImage="addMainImage"
            />
          </div>
          <div class="page__content-item">
            <p>Gallery</p>
            <ImageGallery
                :gallery="pagesStore.pagesList[id].images[pagesStore.pagesList[id].language.index].gallery"
                @getImage="addImage"
                @deleteImage="deleteImage"
            />
          </div>
        </div>
        <div class="page__content-item">
          <SeoInputs
              v-model:url="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].seo.url"
              v-model:title="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].seo.title"
              v-model:keywords="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].seo.keywords"
              v-model:description="pagesStore.pagesList[id].data[pagesStore.pagesList[id].language.index].seo.description"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="pagesStore.uploadPage(id)">Save</button>
  </div>
</template>

<script setup>
import {onBeforeMount, ref, watch} from "vue";
import {usePagesStore} from "@/stores/pages";
import TheLoading from "@/components/admin/TheLoading";
import ImageInput from "@/components/admin/ImageInput";
import ImageGallery from "@/components/admin/ImageGallery";
import SeoInputs from "@/components/admin/SeoInputs";
import {useCinemaStore} from "@/stores/cinemas";
import {useRouter} from "vue-router";

const router = useRouter();

const pagesStore = usePagesStore();
const cinemaStore = useCinemaStore();


const props = defineProps(['id', 'parent']);

const cinemasLoaded = ref(false);
onBeforeMount(() => {
  if (pagesStore.pagesList[props.id].name.includes('contacts')) {
    cinemasLoaded.value = false;
    cinemaStore.getCinemas().then(() => {
      for (let i = 0; i < pagesStore.pagesList[props.id].data.length; i++) {
        // get cinemas for contacts page
        if (pagesStore.pagesList[props.id].name.includes('contacts')) {
          if (cinemaStore.cinemaList.length > 0) {
            for (let j = 0; j < cinemaStore.cinemaList.length; j++) {
              pagesStore.pagesList[props.id].data[i].cinemas.push({
                name: cinemaStore.cinemaList[j].name,
                address: '',
                coordinate: ''
              });
            }
            // remove dublicates
            const uniqueNames = [];
            pagesStore.pagesList[props.id].data[i].cinemas = pagesStore.pagesList[props.id].data[i].cinemas.filter(element => {
              const isDuplicate = uniqueNames.includes(element.name);
              if (!isDuplicate) {
                uniqueNames.push(element.name);
                return true;
              }
              return false;
            });
            // check if cinemas were deleted
            let result = pagesStore.pagesList[props.id].data[i].cinemas.filter(o1 => !cinemaStore.cinemaList.some(o2 => o1.name === o2.name));
            for (let j = 0; j < pagesStore.pagesList[props.id].data[i].cinemas.length; j++) {
              if (result.length > 0) {
                for (let k = 0; k < result.length; k++) {
                  if (pagesStore.pagesList[props.id].data[i].cinemas[j].name === result[k].name) {
                    pagesStore.pagesList[props.id].data[i].cinemas.splice(j, 1);
                  }
                }
              }
            }
          }
          else {
            pagesStore.pagesList[props.id].data[i].cinemas = [];
          }
        }
      }
      cinemasLoaded.value = true;
    });
  }
})

watch(() => pagesStore.pagesList[props.id].language.selected, () => {
  if (pagesStore.pagesList[props.id].language.selected === 'en') {
    pagesStore.pagesList[props.id].language.index = 0;
  }
  else {
    pagesStore.pagesList[props.id].language.index = 1;
  }
});
function addMainImage(image) {
  let lang = pagesStore.pagesList[props.id].language.index;
  if (lang === 0) {
    pagesStore.pagesList[props.id].data[lang].main.name = pagesStore.pagesList[props.id].images[lang].main.name = pagesStore.pagesList[props.id].name + "-en";
  }
  else {
    pagesStore.pagesList[props.id].data[lang].main.name = pagesStore.pagesList[props.id].images[lang].main.name = pagesStore.pagesList[props.id].name + "-ua";
  }
  pagesStore.pagesList[props.id].images[lang].main.image = image;
  pagesStore.pagesList[props.id].images[lang].main.url = URL.createObjectURL(image);
  pagesStore.pagesList[props.id].images[lang].main.uploaded = false;
}
function addImage(image) {
  let lang = pagesStore.pagesList[props.id].language.index;
  let i = pagesStore.pagesList[props.id].data[lang].gallery.length;
  if (lang === 0) {
    pagesStore.pagesList[props.id].data[lang].gallery.push({
      id: i,
      name: pagesStore.pagesList[props.id].name + '-' + Date.now() + '-en',
      url: null
    });
  }
  else {
    pagesStore.pagesList[props.id].data[lang].gallery.push({
      id: i,
      name: pagesStore.pagesList[props.id].name + '-' + Date.now() + '-ua',
      url: null
    });
  }
  pagesStore.pagesList[props.id].images[lang].gallery.push({
    id: i,
    name: pagesStore.pagesList[props.id].data[lang].gallery[i].name,
    uploaded: false,
    image: image,
    url: URL.createObjectURL(image)
  });
}
function deleteImage(index) {
  let lang = pagesStore.pagesList[props.id].language.index;
  if (pagesStore.pagesList[props.id].images[lang].gallery[index].uploaded) {
    pagesStore.pagesList[props.id].images[lang].deleted.push(pagesStore.pagesList[props.id].images[lang].gallery[index].name)
  }
  pagesStore.pagesList[props.id].data[lang].gallery.splice(index, 1);
  pagesStore.pagesList[props.id].images[lang].gallery.splice(index, 1);
  for (let i = 0; i < pagesStore.pagesList[props.id].images[lang].gallery.length; i++) {
    if (pagesStore.pagesList[props.id].images[lang].gallery[i].id !== i) {
      pagesStore.pagesList[props.id].data[lang].gallery[i].id = pagesStore.pagesList[props.id].images[lang].gallery[i].id = i;
    }
  }
}

watch(() => pagesStore.uploaded, (value) => {
  if (value) {
    router.go(-1);
  }
});
</script>

<script>
export default {
  name: "AdminPage"
}
</script>

<style scoped>
.page {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.page__controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page__languages {
  display: flex;
}

.page__wrapper {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.page__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.page__content-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.page__content-item p {
  min-width: 90px;
}
.phone p {
  width: 90px;
}
.phone__inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.page__content-cinema {
  padding: 20px;
  border-radius: 15px;
  border: 1px solid black;
}

.image__preview {
  max-width: 130px;
}

p, label {
  margin: 0;
}
input {
  max-width: 500px;
}
</style>