import {defineStore} from 'pinia';
import {db, storage} from "@/firebase/firebase";
import {collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
// import {useCinemaStore} from "@/stores/cinemas";


// const cinemaStore = useCinemaStore();

export const usePagesStore = defineStore({
    id: "Pages",
    state: () => ({
        loading: false,
        pagesList: [],
        showModal: false,
        uploaded: false
    }),
    actions: {
        async getPages() {
            this.loading = true;
            this.pagesList = [];
            const pagesData = await getDocs(collection(db, 'pages'));
            // get pages data
            pagesData.forEach((doc) => {
                if (doc.id.includes('contacts') || doc.id.includes('home') || doc.id.includes('movies') || doc.id.includes('schedule') || doc.id.includes('upcoming') || doc.id.includes('cinemas') || doc.id.includes('specials') || doc.id.includes('news')) {
                    this.pagesList.push({
                        id: this.pagesList.length,
                        name: doc.id,
                        uploaded: true,
                        creationDate: doc.data().creationDate,
                        status: doc.data().status,
                        language: doc.data().language,
                        routeName: doc.data().routeName,
                        data: doc.data().data,
                    });
                }
                else {
                    this.pagesList.push({
                        id: this.pagesList.length,
                        name: doc.id,
                        uploaded: true,
                        creationDate: doc.data().creationDate,
                        status: doc.data().status,
                        language: doc.data().language,
                        routeName: doc.data().routeName,
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
                }
            });
            this.pagesList.forEach((page) => {
                if (!page.name.includes('page')) {
                    page.id = 'default';
                }
                for (let i = 0; i < page.data.length; i++) {
                    // get cinemas for contacts page
                    // if (page.name.includes('contacts')) {
                    //     if (cinemaStore.cinemaList.length > 0) {
                    //         for (let j = 0; j < cinemaStore.cinemaList.length; j++) {
                    //             page.data[i].cinemas.push({
                    //                 name: cinemaStore.cinemaList[j].name,
                    //                 address: '',
                    //                 coordinate: ''
                    //             });
                    //         }
                    //         // remove dublicates
                    //         const uniqueNames = [];
                    //         page.data[i].cinemas = page.data[i].cinemas.filter(element => {
                    //             const isDuplicate = uniqueNames.includes(element.name);
                    //             if (!isDuplicate) {
                    //                 uniqueNames.push(element.name);
                    //                 return true;
                    //             }
                    //             return false;
                    //         });
                    //         // check if cinemas were deleted
                    //         let result = page.data[i].cinemas.filter(o1 => !cinemaStore.cinemaList.some(o2 => o1.name === o2.name));
                    //         for (let j = 0; j < page.data[i].cinemas.length; j++) {
                    //             if (result.length > 0) {
                    //                 for (let k = 0; k < result.length; k++) {
                    //                     if (page.data[i].cinemas[j].name === result[k].name) {
                    //                         page.data[i].cinemas.splice(j, 1);
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    //     else {
                    //         page.data[i].cinemas = [];
                    //     }
                    // }
                    // get pages gallery
                    if (page.data[i].gallery) {
                        for (let j = 0; j < page.data[i].gallery.length; j++) {
                            page.images[i].gallery.push({
                                id: page.images[i].gallery.length,
                                name: page.data[i].gallery[j].name,
                                uploaded: true,
                                image: null,
                                url: page.data[i].gallery[j].url
                            });
                        }
                    }
                }
            });
            this.loading = false;
        },
        async deletePage(id) {
            this.showModal = false;
            this.loading = true;
            if (this.pagesList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "pages", this.pagesList[id].name));
                // delete images
                for (let i = 0; i < this.pagesList[id].images.length; i++) {
                    // delete main image
                    if (this.pagesList[id].images[i].main.name !== null) {
                        const delRef = ref(storage, 'pages/main/' + this.pagesList[id].images[i].main.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.pagesList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.pagesList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'pages/gallery/' + this.pagesList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.pagesList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.pagesList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'pages/gallery/' + this.pagesList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
            }
            this.pagesList.splice(id, 1);
            for (let i = 0; i < this.pagesList.length; i++) {
                if (this.pagesList[i].id !== i && this.pagesList[i].id !== 'default') {
                    this.pagesList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadPage(id) {
            this.loading = true;
            this.uploaded = false;
            // upload pages images
            if (this.pagesList[id].images) {
                for (let i = 0; i < this.pagesList[id].images.length; i++) {
                    // upload main image (update if was changed)
                    if (this.pagesList[id].images[i].main.image !== null) {
                        try {
                            const mainRef = ref(storage, "pages/main/" + this.pagesList[id].images[i].main.name);
                            await uploadBytes(mainRef, this.pagesList[id].images[i].main.image).then(async () => {
                                await getDownloadURL(mainRef).then((url) => {
                                    this.pagesList[id].data[i].main.url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                    // delete images from gallery
                    if (this.pagesList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.pagesList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, "pages/gallery/" + this.pagesList[id].images[i].deleted[j]);
                            await deleteObject(delRef).then(() => {
                                this.pagesList[id].images[i].deleted.splice(j, 1);
                            }).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    // upload images from gallery
                    if (this.pagesList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.pagesList[id].images[i].gallery.length; j++) {
                            if (this.pagesList[id].images[i].gallery[j].image !== null) {
                                try {
                                    const galleryRef = ref(storage, "pages/gallery/" + this.pagesList[id].images[i].gallery[j].name);
                                    await uploadBytes(galleryRef, this.pagesList[id].images[i].gallery[j].image).then(async () => {
                                        await getDownloadURL(galleryRef).then((url) => {
                                            this.pagesList[id].data[i].gallery[j].url = url;
                                        });
                                    });
                                } catch (e) {
                                    console.error("Error uploading image: ", e);
                                }
                            }
                        }
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        },
        async uploadPageData(id) {
            const docData = {
                creationDate: this.pagesList[id].creationDate,
                routeName: this.pagesList[id].routeName,
                status: this.pagesList[id].status,
                language: this.pagesList[id].language,
                data: this.pagesList[id].data,
            }
            await setDoc(doc(db, "pages", this.pagesList[id].name), docData).then(() => {
                this.loading = false;
                this.uploaded = true;
            });
        }
    }
})