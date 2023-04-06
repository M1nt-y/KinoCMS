import { defineStore } from 'pinia'
import { doc, setDoc, updateDoc, deleteDoc, arrayUnion, getDocs, collection } from "firebase/firestore";
import { db, storage } from "@/firebase/firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const useCinemaStore = defineStore({
    id: "Cinemas",
    state: () => ({
        cinemaList: [],
        loading: false,
        showModal: false,
        uploaded: false
    }),
    actions: {
        async getCinemas() {
            this.loading = true;
            this.cinemaList = [];
            const cinemasData = await getDocs(collection(db, 'cinemas'));
            // get cinemas data
            cinemasData.forEach((doc) => {
                this.cinemaList.push({
                    id: this.cinemaList.length,
                    name: doc.id,
                    uploaded: true,
                    language: doc.data().language,
                    data: doc.data().data,
                    images: [
                        {
                            logo: {
                                name: doc.data().data[0].logo.name,
                                image: null,
                                url: doc.data().data[0].logo.url,
                                uploaded: true
                            },
                            banner: {
                                name: doc.data().data[0].banner.name,
                                image: null,
                                url: doc.data().data[0].banner.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            logo: {
                                name: doc.data().data[1].logo.name,
                                image: null,
                                url: doc.data().data[1].logo.url,
                                uploaded: true
                            },
                            banner: {
                                name: doc.data().data[1].banner.name,
                                image: null,
                                url: doc.data().data[1].banner.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        }
                    ],
                    halls: doc.data().halls,
                    deletedHalls: []
                });
            });
            this.cinemaList.forEach((cinema) => {
                // get cinemas gallery
                for (let i = 0; i < cinema.data.length; i++) {
                    for (let j = 0; j < cinema.data[i].gallery.length; j++) {
                        cinema.images[i].gallery.push({
                            id: cinema.images[i].gallery.length,
                            name: cinema.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: cinema.data[i].gallery[j].url
                        });
                    }
                }
                // get halls images
                for (let i = 0; i < cinema.halls.length; i++) {
                    cinema.halls[i].id = i;
                    cinema.halls[i].uploaded = true;
                    cinema.halls[i].images =  [
                        {
                            scheme: {
                                name: cinema.halls[i].data[0].scheme.name,
                                image: null,
                                url: cinema.halls[i].data[0].scheme.url,
                                uploaded: true
                            },
                            banner: {
                                name: cinema.halls[i].data[0].banner.name,
                                image: null,
                                url: cinema.halls[i].data[0].banner.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            scheme: {
                                name: cinema.halls[i].data[1].scheme.name,
                                image: null,
                                url: cinema.halls[i].data[1].scheme.url,
                                uploaded: true
                            },
                            banner: {
                                name: cinema.halls[i].data[1].banner.name,
                                image: null,
                                url: cinema.halls[i].data[1].banner.url,
                                uploaded: true
                            },
                            gallery: [],
                            deleted: []
                        }
                    ];
                    // get halls gallery
                    for (let j = 0; j < cinema.halls[i].data.length; j++) {
                        for (let k = 0; k < cinema.halls[i].data[j].gallery.length; k++) {
                            cinema.halls[i].images[j].gallery.push({
                                id: cinema.halls[i].images[j].gallery.length,
                                name: cinema.halls[i].data[j].gallery[k].name,
                                uploaded: true,
                                image: null,
                                url: cinema.halls[i].data[j].gallery[k].url
                            });
                        }
                    }
                }
            });
            this.loading = false;
        },
        async deleteCinema(id) {
            this.showModal = false;
            this.loading = true;
            if (this.cinemaList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "cinemas", this.cinemaList[id].name));
                // delete images
                for (let i = 0; i < this.cinemaList[id].images.length; i++) {
                    // delete main image
                    if (this.cinemaList[id].images[i].logo.name !== null) {
                        const delRef = ref(storage, 'cinemas/logo/' + this.cinemaList[id].images[i].logo.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete banner
                    if (this.cinemaList[id].images[i].banner.name !== null) {
                        const delRef = ref(storage, 'cinemas/banner/' + this.cinemaList[id].images[i].banner.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.cinemaList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.cinemaList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'cinemas/gallery/' + this.cinemaList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.cinemaList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.cinemaList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'cinemas/gallery/' + this.cinemaList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
                // delete halls images
                if (this.cinemaList[id].halls.length !== 0) {
                    for (let i = 0; i < this.cinemaList[id].halls.length; i++) {
                        for (let j = 0; j < this.cinemaList[id].halls[i].images.length; j++) {
                            // delete scheme
                            if (this.cinemaList[id].halls[i].images[j].scheme.name !== null) {
                                const delRef = ref(storage, "cinemas/halls/scheme/" + this.cinemaList[id].halls[i].images[j].scheme.name);
                                await deleteObject(delRef).catch((error) => {
                                    console.error(error);
                                });
                            }
                            // delete banner
                            if (this.cinemaList[id].halls[i].images[j].banner.name !== null) {
                                const delRef = ref(storage, "cinemas/halls/banner/" + this.cinemaList[id].halls[i].images[j].banner.name);
                                await deleteObject(delRef).catch((error) => {
                                    console.error(error);
                                });
                            }
                            // delete images from gallery
                            if (this.cinemaList[id].halls[i].images[j].gallery.length !== 0) {
                                for (let k = 0; k < this.cinemaList[id].halls[i].images[j].gallery.length; k++) {
                                    const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].halls[i].images[j].gallery[k].name);
                                    await deleteObject(delRef).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                            if (this.cinemaList[id].halls[i].images[j].deleted.length !== 0) {
                                for (let k = 0; k < this.cinemaList[id].halls[i].images[j].deleted.length; k++) {
                                    const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].halls[i].images[j].deleted[k].name);
                                    await deleteObject(delRef).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                        }
                    }
                }
                // delete images if hall was deleted
                if (this.cinemaList[id].deletedHalls.length !== 0) {
                    for (let i = 0; i < this.cinemaList[id].deletedHalls.length; i++) {
                        for (let j = 0; j < this.cinemaList[id].deletedHalls[i].images.length; j++) {
                            // delete scheme
                            if (this.cinemaList[id].deletedHalls[i].images[j].scheme.name !== null) {
                                const delRef = ref(storage, "cinemas/halls/scheme/" + this.cinemaList[id].deletedHalls[i].images[j].scheme.name);
                                await deleteObject(delRef).catch((error) => {
                                    console.error(error);
                                });
                            }
                            // delete banner
                            if (this.cinemaList[id].deletedHalls[i].images[j].banner.name !== null) {
                                const delRef = ref(storage, "cinemas/halls/banner/" + this.cinemaList[id].deletedHalls[i].images[j].banner.name);
                                await deleteObject(delRef).catch((error) => {
                                    console.error(error);
                                });
                            }
                            // delete images from gallery
                            if (this.cinemaList[id].deletedHalls[i].images[j].gallery.length !== 0) {
                                for (let k = 0; k < this.cinemaList[id].deletedHalls[i].images[j].gallery.length; k++) {
                                    const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].deletedHalls[i].images[j].gallery[k].name);
                                    await deleteObject(delRef).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                            if (this.cinemaList[id].deletedHalls[i].images[j].deleted.length !== 0) {
                                for (let k = 0; k < this.cinemaList[id].halls[i].images[j].deleted.length; k++) {
                                    const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].deletedHalls[i].images[j].deleted[k].name);
                                    await deleteObject(delRef).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                        }
                    }
                }
            }
            this.cinemaList.splice(id, 1);
            for (let i = 0; i < this.cinemaList.length; i++) {
                if (this.cinemaList[i].id !== i) {
                    this.cinemaList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadCinema(id) {
            this.loading = true;
            this.uploaded = false;
            // delete images if hall was deleted
            if (this.cinemaList[id].deletedHalls.length !== 0) {
                for (let i = 0; i < this.cinemaList[id].deletedHalls.length; i++) {
                    for (let j = 0; j < this.cinemaList[id].deletedHalls[i].images.length; j++) {
                        // delete scheme
                        if (this.cinemaList[id].deletedHalls[i].images[j].scheme.name !== null) {
                            const delSchemeRef = ref(storage, "cinemas/halls/scheme/" + this.cinemaList[id].deletedHalls[i].images[j].scheme.name);
                            await deleteObject(delSchemeRef).catch((error) => {
                                console.error(error);
                            });
                        }
                        if (this.cinemaList[id].deletedHalls[i].images[j].banner.name !== null) {
                            // delete banner
                            const delBannerRef = ref(storage, "cinemas/halls/banner/" + this.cinemaList[id].deletedHalls[i].images[j].banner.name);
                            await deleteObject(delBannerRef).catch((error) => {
                                console.error(error);
                            });
                        }
                        // delete images from gallery
                        if (this.cinemaList[id].deletedHalls[i].images[j].gallery.length !== 0) {
                            for (let k = 0; k < this.cinemaList[id].deletedHalls[i].images[j].gallery.length; k++) {
                                if (this.cinemaList[id].deletedHalls[i].images[j].gallery[k].name !== null) {
                                    const delGalleryRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].deletedHalls[i].images[j].gallery[k].name);
                                    await deleteObject(delGalleryRef).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }
                        }
                        if (this.cinemaList[id].deletedHalls[i].images[j].deleted.length !== 0) {
                            for (let k = 0; k < this.cinemaList[id].deletedHalls[i].images[j].deleted.length; k++) {
                                const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].deletedHalls[i].images[j].deleted[k]);
                                await deleteObject(delRef).catch((error) => {
                                    console.error(error);
                                });
                            }
                        }
                    }

                    // need to check if splice goes after everything was deleted
                    this.cinemaList[id].deletedHalls.splice(i, 1);
                }
            }
            // upload cinema images
            for (let i = 0; i < this.cinemaList[id].images.length; i++) {
                // upload logo (update if was changed)
                if (this.cinemaList[id].images[i].logo.image !== null) {
                    try {
                        const logoRef = ref(storage, "cinemas/logo/" + this.cinemaList[id].images[i].logo.name);
                        await uploadBytes(logoRef, this.cinemaList[id].images[i].logo.image).then(async () => {
                            await getDownloadURL(logoRef).then((url) => {
                                this.cinemaList[id].data[i].logo.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // upload banner (update if was changed)
                if (this.cinemaList[id].images[i].banner.image !== null) {
                    try {
                        const bannerRef = ref(storage, "cinemas/banner/" + this.cinemaList[id].images[i].banner.name);
                        await uploadBytes(bannerRef, this.cinemaList[id].images[i].banner.image).then(async () => {
                            await getDownloadURL(bannerRef).then((url) => {
                                this.cinemaList[id].data[i].banner.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // delete images from gallery
                if (this.cinemaList[id].images[i].deleted.length !== 0) {
                    for (let j = 0; j < this.cinemaList[id].images[i].deleted.length; j++) {
                        const delRef = ref(storage, "cinemas/gallery/" + this.cinemaList[id].images[i].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.cinemaList[id].images[i].deleted.splice(j, 1);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }
                // upload images from gallery
                for (let j = 0; j < this.cinemaList[id].images[i].gallery.length; j++) {
                    if (this.cinemaList[id].images[i].gallery[j].image !== null) {
                        try {
                            const galleryRef = ref(storage, "cinemas/gallery/" + this.cinemaList[id].images[i].gallery[j].name);
                            await uploadBytes(galleryRef, this.cinemaList[id].images[i].gallery[j].image).then(async () => {
                                await getDownloadURL(galleryRef).then((url) => {
                                    this.cinemaList[id].data[i].gallery[j].url = url;
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
        async uploadCinemaData(id) {
            const docData = {
                language: this.cinemaList[id].language,
                data: this.cinemaList[id].data,
                halls: []
            }
            await setDoc(doc(db, "cinemas", this.cinemaList[id].name), docData).then(() => {
                if (this.cinemaList[id].halls.length) {
                    this.uploadHalls(id).then(() => {
                        this.uploadHallsData(id);
                    });
                }
                else {
                    this.loading = false;
                    this.uploaded = true;
                }
            });
        },
        async uploadHalls(id) {
            // upload halls images
            for (let i = 0; i < this.cinemaList[id].halls.length; i++) {
                for (let j = 0; j < this.cinemaList[id].halls[i].images.length; j++) {
                    // upload scheme (update if was changed)
                    if (this.cinemaList[id].halls[i].images[j].scheme.image !== null) {
                        try {
                            const schemeRef = ref(storage, "cinemas/halls/scheme/" + this.cinemaList[id].halls[i].images[j].scheme.name);
                            await uploadBytes(schemeRef, this.cinemaList[id].halls[i].images[j].scheme.image).then(async () => {
                                await getDownloadURL(schemeRef).then((url) => {
                                    this.cinemaList[id].halls[i].data[j].scheme.url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                    // upload banner (update if was changed)
                    if (this.cinemaList[id].halls[i].images[j].banner.image !== null) {
                        try {
                            const bannerRef = ref(storage, "cinemas/halls/banner/" + this.cinemaList[id].halls[i].images[j].banner.name);
                            await uploadBytes(bannerRef, this.cinemaList[id].halls[i].images[j].banner.image).then(async () => {
                                await getDownloadURL(bannerRef).then((url) => {
                                    this.cinemaList[id].halls[i].data[j].banner.url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                    // delete images from gallery
                    if (this.cinemaList[id].halls[i].images[j].deleted.length !== 0) {
                        for (let k = 0; k < this.cinemaList[id].halls[i].images[j].deleted.length; k++) {
                            const delRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].halls[i].images[j].deleted[k]);
                            await deleteObject(delRef).then(() => {
                                this.cinemaList[id].halls[i].images[j].deleted.splice(k, 1);
                            }).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    // upload images from gallery
                    for (let k = 0; k < this.cinemaList[id].halls[i].images[j].gallery.length; k++) {
                        if (this.cinemaList[id].halls[i].images[j].gallery[k].image !== null) {
                            try {
                                const galleryRef = ref(storage, "cinemas/halls/gallery/" + this.cinemaList[id].halls[i].images[j].gallery[k].name);
                                await uploadBytes(galleryRef, this.cinemaList[id].halls[i].images[j].gallery[k].image).then(async () => {
                                    await getDownloadURL(galleryRef).then((url) => {
                                        this.cinemaList[id].halls[i].data[j].gallery[k].url = url;
                                    });
                                });
                            }
                            catch (e) {
                                console.error("Error uploading image: ", e);
                            }
                        }
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        },
        async uploadHallsData(id) {
            const cinemaRef = doc(db, "cinemas", this.cinemaList[id].name);
            for (let i = 0; i < this.cinemaList[id].halls.length; i++) {
                const hallData = {
                    name: this.cinemaList[id].halls[i].name,
                    creationDate: this.cinemaList[id].halls[i].creationDate,
                    data: this.cinemaList[id].halls[i].data
                }
                await updateDoc(cinemaRef, {
                    halls: arrayUnion(hallData)
                }).then(() => {
                    if (i === this.cinemaList[id].halls.length-1) {
                        this.loading = false;
                        this.uploaded = true;
                    }
                });
            }
        }
    }
})