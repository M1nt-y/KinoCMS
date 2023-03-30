import { defineStore } from 'pinia';
import { db, storage } from "@/firebase/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const useSpecialsStore = defineStore({
    id: "Specials",
    state: () => ({
        loading: false,
        offerList: [],
        showModal: false,
        uploaded: false
    }),
    actions: {
        async getOffers() {
            this.loading = true;
            this.offerList = [];
            const specialsData = await getDocs(collection(db, 'specials'));
            // get specials data
            specialsData.forEach((doc) => {
                this.offerList.push({
                    id: this.offerList.length,
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
            this.offerList.forEach((offer) => {
                for (let i = 0; i < offer.data.length; i++) {
                    // get offer gallery
                    for (let j = 0; j < offer.data[i].gallery.length; j++) {
                        offer.images[i].gallery.push({
                            id: offer.images[i].gallery.length,
                            name: offer.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: offer.data[i].gallery[j].url
                        });
                    }
                    // change date from object to date
                    if (typeof offer.data[i].publicationDate === 'object') {
                        offer.data[i].publicationDate = new Date(offer.data[i].publicationDate.seconds*1000);
                    }
                }
            });
            this.loading = false;
        },
        async deleteOffer(id) {
            this.showModal = false;
            this.loading = true;
            if (this.offerList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "specials", this.offerList[id].name));
                // delete images
                for (let i = 0; i < this.offerList[id].images.length; i++) {
                    // delete main image
                    if (this.offerList[id].images[i].main.name !== null) {
                        const delRef = ref(storage, 'specials/main/' + this.offerList[id].images[i].main.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.offerList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.offerList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'specials/gallery/' + this.offerList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.offerList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.offerList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'specials/gallery/' + this.offerList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
            }
            this.offerList.splice(id, 1);
            for (let i = 0; i < this.offerList.length; i++) {
                if (this.offerList[i].id !== i) {
                    this.offerList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadOffer(id) {
            this.loading = true;
            this.uploaded = false;
            // upload specials images
            for (let i = 0; i < this.offerList[id].images.length; i++) {
                // upload main image (update if was changed)
                if (this.offerList[id].images[i].main.image !== null) {
                    try {
                        const mainRef = ref(storage, "specials/main/" + this.offerList[id].images[i].main.name);
                        await uploadBytes(mainRef, this.offerList[id].images[i].main.image).then(async () => {
                            await getDownloadURL(mainRef).then((url) => {
                                this.offerList[id].data[i].main.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // delete images from gallery
                if (this.offerList[id].images[i].deleted.length !== 0) {
                    for (let j = 0; j < this.offerList[id].images[i].deleted.length; j++) {
                        const delRef = ref(storage, "specials/gallery/" + this.offerList[id].images[i].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.offerList[id].images[i].deleted.splice(j, 1);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }
                // upload images from gallery
                for (let j = 0; j < this.offerList[id].images[i].gallery.length; j++) {
                    if (this.offerList[id].images[i].gallery[j].image !== null) {
                        try {
                            const galleryRef = ref(storage, "specials/gallery/" + this.offerList[id].images[i].gallery[j].name);
                            await uploadBytes(galleryRef, this.offerList[id].images[i].gallery[j].image).then(async () => {
                                await getDownloadURL(galleryRef).then((url) => {
                                    this.offerList[id].data[i].gallery[j].url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                }
            }
        },
        async uploadOfferData(id) {
            const docData = {
                creationDate: this.offerList[id].creationDate,
                status: this.offerList[id].status,
                language: this.offerList[id].language,
                data: this.offerList[id].data,
            }
            await setDoc(doc(db, "specials", this.offerList[id].name), docData).then(() => {
                this.loading = false;
                this.uploaded = true;
            });
        }
    }
})