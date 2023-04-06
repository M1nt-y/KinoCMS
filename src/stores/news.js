import { defineStore } from 'pinia'
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {db, storage} from "@/firebase/firebase";
import {collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";


export const useNewsStore = defineStore({
    id: "News",
     state: () => ({
         loading: false,
         newsList: [],
         showModal: false,
         uploaded: false
     }),
    actions: {
        async getNews() {
            this.loading = true;
            this.newsList = [];
            const newsData = await getDocs(collection(db, 'news'));
            // get news data
            newsData.forEach((doc) => {
                this.newsList.push({
                    id: this.newsList.length,
                    name: doc.id,
                    uploaded: true,
                    creationDate: doc.data().creationDate,
                    status: doc.data().status,
                    language: doc.data().language,
                    data: doc.data().data,
                    images: [
                        {
                            main: {
                                name: doc.data().data[0].main.name,
                                image: null,
                                url: doc.data().data[0].main.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            main: {
                                name: doc.data().data[1].main.name,
                                image: null,
                                url: doc.data().data[1].main.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        }
                    ]
                });
            });
            this.newsList.forEach((news) => {
                for (let i = 0; i < news.data.length; i++) {
                    // get news gallery
                    for (let j = 0; j < news.data[i].gallery.length; j++) {
                        news.images[i].gallery.push({
                            id: news.images[i].gallery.length,
                            name: news.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: news.data[i].gallery[j].url
                        });
                    }
                    // change date from object to date
                    if (typeof news.data[i].publicationDate === 'object') {
                        news.data[i].publicationDate = new Date(news.data[i].publicationDate.seconds*1000);
                    }
                }
            });
            this.loading = false;
        },
        async deleteNews(id) {
            this.showModal = false;
            this.loading = true;
            if (this.newsList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "news", this.newsList[id].name));
                // delete images
                for (let i = 0; i < this.newsList[id].images.length; i++) {
                    // delete main image
                    if (this.newsList[id].images[i].main.name !== null) {
                        const delRef = ref(storage, 'news/main/' + this.newsList[id].images[i].main.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.newsList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.newsList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'news/gallery/' + this.newsList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.newsList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.newsList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'news/gallery/' + this.newsList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
            }
            this.newsList.splice(id, 1);
            for (let i = 0; i < this.newsList.length; i++) {
                if (this.newsList[i].id !== i) {
                    this.newsList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadNews(id) {
            this.loading = true;
            this.uploaded = false;
            // upload news images
            for (let i = 0; i < this.newsList[id].images.length; i++) {
                // upload main image (update if was changed)
                if (this.newsList[id].images[i].main.image !== null) {
                    try {
                        const mainRef = ref(storage, "news/main/" + this.newsList[id].images[i].main.name);
                        await uploadBytes(mainRef, this.newsList[id].images[i].main.image).then(async () => {
                            await getDownloadURL(mainRef).then((url) => {
                                this.newsList[id].data[i].main.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // delete images from gallery
                if (this.newsList[id].images[i].deleted.length !== 0) {
                    for (let j = 0; j < this.newsList[id].images[i].deleted.length; j++) {
                        const delRef = ref(storage, "news/gallery/" + this.newsList[id].images[i].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.newsList[id].images[i].deleted.splice(j, 1);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }
                // upload images from gallery
                for (let j = 0; j < this.newsList[id].images[i].gallery.length; j++) {
                    if (this.newsList[id].images[i].gallery[j].image !== null) {
                        try {
                            const galleryRef = ref(storage, "news/gallery/" + this.newsList[id].images[i].gallery[j].name);
                            await uploadBytes(galleryRef, this.newsList[id].images[i].gallery[j].image).then(async () => {
                                await getDownloadURL(galleryRef).then((url) => {
                                    this.movieList[id].data[i].gallery[j].url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        },
        async uploadNewsData(id) {
            const docData = {
                creationDate: this.newsList[id].creationDate,
                status: this.newsList[id].status,
                language: this.newsList[id].language,
                data: this.newsList[id].data,
            }
            await setDoc(doc(db, "news", this.newsList[id].name), docData).then(() => {
                this.loading = false;
                this.uploaded = true;
            });
        }
    }
})