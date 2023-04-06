<template>
  <div class="banners">
    <TheLoading v-show="bannersStore.loading" />
    <h2>Movies swiper on the Main page</h2>
    <div class="banners__wrapper">
      <div class="banners__content">
        <div class="banner movie-banner" v-for="(banner, index) in bannersStore.movieBanners.banners" :key="index">
          <img class="movie-banner__upload-preview" :src="banner.url" alt="">
          <div class="banner__upload-remove" @click="bannersStore.deleteMovieBanner(banner.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1.5)">
                <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
              </g>
            </svg>
          </div>
          <div class="banner__input">
            <p>URL:</p>
            <input class="form-control" type="text" placeholder="URL" v-model="bannersStore.movieBanners.data[index].url" >
          </div>
          <div class="banner__input">
            <p>Title:</p>
            <input class="form-control" type="text" placeholder="Title" v-model="bannersStore.movieBanners.data[index].title" >
          </div>
        </div>
        <label class="banners_add">
          <span>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <input class="banner__upload-input" type="file" multiple="multiple" accept="image/*" @change="movieBannersSelected($event)">
        </label>
      </div>
      <div class="banners__buttons">
        <div class="banners__select">
          <p>Rotation speed</p>
          <select class="form-control" v-model.number="bannersStore.movieBanners.rotationSpeed">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="handleUploadMovieBanners">Save</button>
      </div>
    </div>
    <h2>Background banner</h2>
    <div class="banners__wrapper">
      <div class="banners__content banners__background">
        <div class="banners__background-radio">
          <input type="radio" id="image" value="Image" v-model="bannersStore.background.selected" />
          <label for="image">Image for background</label>
          <div class="banner bg-banner" v-if="bannersStore.background.selected==='Image'">
            <div class="banner__upload">
              <label>
                <span v-if="bannersStore.background.banner.image === null">add</span>
                <img class="bg-banner__preview" v-else :src="bannersStore.background.banner.url" alt="">
                <input type="file" class="banner__upload-input bg-banner__upload-input" accept="image/*" @change="bgFileSelected($event)" />
              </label>
            </div>
          </div>
        </div>
        <div class="banners__background-radio">
          <input type="radio" id="color" value="Color" v-model="bannersStore.background.selected" />
          <label for="color">Color for background</label>
          <ColorPicker
              v-if="bannersStore.background.selected==='Color'"
              :color="bannersStore.background.color"
              @color-change="updateColor"
          />
        </div>
      </div>
      <button class="btn btn-primary" @click="bannersStore.uploadBackground" v-if="bannersStore.background.selected!==''" >Save</button>
    </div>
    <h2>News/Specials swiper on the Main page</h2>
    <div class="banners__wrapper">
      <div class="banners__content">
        <div class="banner news-banner" v-for="(banner, index) in bannersStore.newsBanners.banners" :key="index">
          <img class="news-banner__upload-preview" :src="banner.url" alt="">
          <div class="banner__upload-remove" @click="bannersStore.deleteNewsBanner(banner.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1.5)">
                <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
              </g>
            </svg>
          </div>
          <div class="banner__input">
            <p>URL:</p>
            <input class="form-control" type="text" placeholder="URL" v-model="bannersStore.newsBanners.data[index].url" >
          </div>
        </div>
        <label class="banners__add">
          <span>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <input class="banner__upload-input" type="file" multiple="multiple" accept="image/*" @change="newsBannersSelected($event)">
        </label>
      </div>
      <div class="banners__buttons">
        <div class="banners__select">
          <p>Rotation speed</p>
          <select class="form-control" v-model.number="bannersStore.newsBanners.rotationSpeed">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="handleUploadNewsBanners">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ColorPicker } from 'vue-accessible-color-picker'
import { useBannersStore } from "@/stores/banners";
import TheLoading from "@/components/admin/TheLoading";

const bannersStore = useBannersStore();
bannersStore.getMovieBanners();
bannersStore.getBackground();
bannersStore.getNewsBanners();

async function movieBannersSelected(input) {
  let banners = input.target.files;
  for (let i = 0; i < banners.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1));
    bannersStore.movieBanners.data.push({
      id: bannersStore.movieBanners.data.length,
      name: 'banner-' + Date.now(),
      url: '',
      title: '',
      image: null
    });
    bannersStore.movieBanners.banners.push({
      id: bannersStore.movieBanners.banners.length,
      uploaded: false,
      image: banners[i],
      url: URL.createObjectURL(banners[i])
    })
  }
}
function handleUploadMovieBanners() {
  bannersStore.uploadMovieBanners().then(() => {
    bannersStore.uploadMoviesData();
  });
}
function bgFileSelected(img) {
  let file = img.target.files[0];
  if (file !== undefined) {
    let imageType = /image.*/;
    if (!file.type.match(imageType)) {
      throw 'Wrong file type';
    }
    else if (!file){
      throw 'Not file';
    }
    else {
      bannersStore.background.file = file;
      bannersStore.background.banner.url = URL.createObjectURL(file);
    }
  }
}
function updateColor(eventData) {
  bannersStore.background.color = eventData.colors.hex;
}
async function newsBannersSelected(input) {
  let banners = input.target.files;
  for (let i = 0; i < banners.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1));
    bannersStore.newsBanners.data.push({
      id: bannersStore.newsBanners.data.length,
      name: 'banner-' + Date.now(),
      url: '',
      image: null
    });
    bannersStore.newsBanners.banners.push({
      id: bannersStore.newsBanners.banners.length,
      uploaded: false,
      image: banners[i],
      url: URL.createObjectURL(banners[i])
    })
  }
}
function handleUploadNewsBanners() {
  bannersStore.uploadNewsBanners().then(() => {
    bannersStore.uploadNewsData();
  })
}
</script>

<script>
export default {
  name: "AdminBanners",
}
</script>

<style scoped>
.banners {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.banners__wrapper {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.banners__content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.banners__buttons {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 240px;
}
.banners__wrapper p,
.banners__wrapper label {
  margin: 0;
}
.banner__upload {
  position: relative;
}

.banners__add {
  cursor: pointer;
}

.movie-banner__upload-preview,
.news-banner__upload-preview,
.bg-banner__preview {
  width: 240px;
}

.banner__upload-remove {
  position: absolute;
  top: -10px;
  right: -10px;
}
.banner__upload-input {
  display: none;
}
.banner__input {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
}
.banners__select {
  position: absolute;
  left: 0;
  display: flex;
  gap: 15px;
  align-items: center;
}
.banners__select p {
  min-width: 110px;
}
.banners__background {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.banners__background-radio {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>