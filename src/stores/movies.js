import { defineStore } from 'pinia'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase/firebase";
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export const useMovieStore = defineStore({
    id: 'Movies',
    state: () => ({
        movieList: [],
        upcomingList: [],
        loading: false,
        showModal: false,
        showUpcomingModal: false,
        uploaded: false
    }),
    actions: {
        async getMovies() {
            this.movieList = [];
            this.loading = true;
            const moviesData = await getDocs(collection(db, 'movies'));
            // get movies data
            moviesData.forEach((doc) => {
                this.movieList.push({
                    id: this.movieList.length,
                    name: doc.id,
                    uploaded: true,
                    language: doc.data().language,
                    data: doc.data().data,
                    images: [
                        {
                            main: {
                                name: doc.data().data[0].main.name,
                                image: null,
                                url: doc.data().data[0].main.url
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            main: {
                                name: doc.data().data[1].main.name,
                                image: null,
                                url: doc.data().data[1].main.url
                            },
                            gallery: [],
                            deleted: []
                        }
                    ]
                });
            });
            // get movies gallery
            this.movieList.forEach((movie) => {
                for (let i = 0; i < movie.data.length; i++) {
                    for (let j = 0; j < movie.data[i].gallery.length; j++) {
                        movie.images[i].gallery.push({
                            id: movie.images[i].gallery.length,
                            name: movie.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: movie.data[i].gallery[j].url
                        });
                    }
                }
            });
            this.loading = false;
        },
        addMovie(movie) {
            this.movieList.push(movie);
        },
        async deleteMovie(id) {
            this.showModal = false;
            this.loading = true;
            if (this.movieList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "movies", this.movieList[id].name));
                // delete images
                for (let i = 0; i < this.movieList[id].images.length; i++) {
                    // delete main image
                    if (this.movieList[id].images[i].main.name !== null) {
                        const delRef = ref(storage, 'movies/main/' + this.movieList[id].images[i].main.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.movieList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.movieList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'movies/gallery/' + this.movieList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.movieList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.movieList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'movies/gallery/' + this.movieList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
            }
            this.movieList.splice(id, 1);
            for (let i = 0; i < this.movieList.length; i++) {
                if (this.movieList[i].id !== i) {
                    this.movieList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadMovie(id) {
            this.loading = true;
            this.uploaded = false;
            for (let i = 0; i < this.movieList[id].images.length; i++) {
                // upload main image (update if was changed)
                if (this.movieList[id].images[i].main.image !== null) {
                    try {
                        const mainImageRef = ref(storage, "movies/main/" + this.movieList[id].images[i].main.name);
                        await uploadBytes(mainImageRef, this.movieList[id].images[i].main.image).then(async () => {
                            await getDownloadURL(mainImageRef).then((url) => {
                                this.movieList[id].data[i].main.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // delete images from gallery
                if (this.movieList[id].images[i].deleted.length !== 0) {
                    for (let j = 0; j < this.movieList[id].images[i].deleted.length; j++) {
                        const delRef = ref(storage, "movies/gallery/" + this.movieList[id].images[i].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.movieList[id].images[i].deleted.splice(j, 1);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }
                // upload images
                if (this.movieList[id].images[i].gallery.length) {
                    for (let j = 0; j < this.movieList[id].images[i].gallery.length; j++) {
                        if (this.movieList[id].images[i].gallery[j].image !== null) {
                            try {
                                const galleryRef = ref(storage, "movies/gallery/" + this.movieList[id].images[i].gallery[j].name);
                                await uploadBytes(galleryRef, this.movieList[id].images[i].gallery[j].image).then(async () => {
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
            }
            for (let i = 0; i < this.movieList[id].data.length; i++) {
                for (let j = 0; j < this.movieList[id].data[i].gallery.length; j++) {
                    if (this.movieList[id].data[i].gallery[j].url !== null && j === this.movieList[id].data[i].gallery.length-1 && i === this.movieList[id].data.length-1) {
                        this.uploadMovieData(id);
                    }
                }
            }
        },
        async uploadMovieData(id) {
            const docData = {
                language: this.movieList[id].language,
                data: this.movieList[id].data,
            }
            await setDoc(doc(db, "movies", this.movieList[id].name), docData).then(() => {
                this.loading = false;
                this.uploaded = true;
            });
        },
        async resetMovie(id) {
            this.loading = true;
            if (this.movieList[id].uploaded) {
                for (let i = 0; i < this.movieList[id].images.length; i++) {
                    this.movieList[id].images[i].main.name = null;
                    this.movieList[id].images[i].main.image = null;
                    this.movieList[id].images[i].main.url = null;
                    this.movieList[id].images[i].gallery = [];
                    this.movieList[id].images[i].deleted = [];
                }
                const docRef = doc(db, "movies", this.movieList[id].name);
                // get movie data
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.movieList[id].data = docSnap.data().data;
                    for (let i = 0; i < this.movieList[id].data.length; i++) {
                        // get movie main image
                        this.movieList[id].images[i].main.name = this.movieList[id].data[i].main.name;
                        this.movieList[id].images[i].main.url = this.movieList[id].data[i].main.url;
                        // get movie gallery
                        for (let j = 0; j < this.movieList[id].data[i].gallery.length; j++) {
                            this.movieList[id].images[i].gallery.push({
                                id: this.movieList[id].data[i].gallery.length,
                                name: this.movieList[id].data[i].gallery[j].name,
                                uploaded: true,
                                image: null,
                                url: this.movieList[id].data[i].gallery[j].url
                            });
                        }
                    }
                }
            }
            this.loading = false;
        },
        async getUpcoming() {
            this.upcomingList = [];
            this.loading = true;
            const upcomingData = await getDocs(collection(db, 'upcoming'));
            // get movies data
            upcomingData.forEach((doc) => {
                this.upcomingList.push({
                    id: this.upcomingList.length,
                    name: doc.id,
                    uploaded: true,
                    language: doc.data().language,
                    data: doc.data().data,
                    images: [
                        {
                            main: {
                                name: doc.data().data[0].main.name,
                                image: null,
                                url: doc.data().data[0].main.url
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            main: {
                                name: doc.data().data[1].main.name,
                                image: null,
                                url: doc.data().data[1].main.url
                            },
                            gallery: [],
                            deleted: []
                        }
                    ]
                });
            });
            // get movies gallery
            this.upcomingList.forEach((movie) => {
                for (let i = 0; i < movie.data.length; i++) {
                    for (let j = 0; j < movie.data[i].gallery.length; j++) {
                        movie.images[i].gallery.push({
                            id: movie.images[i].gallery.length,
                            name: movie.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: movie.data[i].gallery[j].url
                        });
                    }
                    // change date from object to date
                    if (typeof movie.data[i].screeningDate === 'object') {
                        movie.data[i].screeningDate = new Date(movie.data[i].screeningDate.seconds*1000);
                    }
                }
            });
            this.loading = false;
        },
        addUpcoming(movie) {
            this.upcomingList.push(movie);
        },
        async deleteUpcoming(id) {
            this.showUpcomingModal = false;
            this.loading = true;
            if (this.upcomingList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "upcoming", this.upcomingList[id].name));
                // delete images
                for (let i = 0; i < this.upcomingList[id].images.length; i++) {
                    // delete main image
                    if (this.upcomingList[id].images[i].main.name !== null) {
                        const delRef = ref(storage, 'upcoming/main/' + this.upcomingList[id].images[i].main.name);
                        await deleteObject(delRef).catch((error) => {
                            console.error(error);
                        });
                    }
                    // delete images from gallery
                    if (this.upcomingList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.upcomingList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'upcoming/gallery/' + this.upcomingList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                    if (this.upcomingList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.upcomingList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'upcoming/gallery/' + this.upcomingList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((error) => {
                                console.error(error);
                            });
                        }
                    }
                }
            }
            this.upcomingList.splice(id, 1);
            for (let i = 0; i < this.upcomingList.length; i++) {
                if (this.upcomingList[i].id !== i) {
                    this.upcomingList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadUpcoming(id) {
            this.loading = true;
            this.uploaded = false;
            for (let i = 0; i < this.upcomingList[id].images.length; i++) {
                // upload main image (update if was changed)
                if (this.upcomingList[id].images[i].main.image !== null) {
                    try {
                        const mainImageRef = ref(storage, "upcoming/main/" + this.upcomingList[id].images[i].main.name);
                        await uploadBytes(mainImageRef, this.upcomingList[id].images[i].main.image).then(async () => {
                            await getDownloadURL(mainImageRef).then((url) => {
                                this.upcomingList[id].data[i].main.url = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading image: ", e);
                    }
                }
                // delete images from gallery
                if (this.upcomingList[id].images[i].deleted.length !== 0) {
                    for (let j = 0; j < this.upcomingList[id].images[i].deleted.length; j++) {
                        const delRef = ref(storage, "upcoming/gallery/" + this.upcomingList[id].images[i].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.upcomingList[id].images[i].deleted.splice(j, 1);
                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                }
                // upload images
                for (let j = 0; j < this.upcomingList[id].images[i].gallery.length; j++) {
                    if (this.upcomingList[id].images[i].gallery[j].image !== null) {
                        try {
                            const galleryRef = ref(storage, "upcoming/gallery/" + this.upcomingList[id].images[i].gallery[j].name);
                            await uploadBytes(galleryRef, this.upcomingList[id].images[i].gallery[j].image).then(async () => {
                                await getDownloadURL(galleryRef).then((url) => {
                                    this.upcomingList[id].data[i].gallery[j].url = url;
                                });
                            });
                        } catch (e) {
                            console.error("Error uploading image: ", e);
                        }
                    }
                }
            }
            for (let i = 0; i < this.upcomingList[id].data.length; i++) {
                for (let j = 0; j < this.upcomingList[id].data[i].gallery.length; j++) {
                    if (this.upcomingList[id].data[i].gallery[j].url !== null && j === this.upcomingList[id].data[i].gallery.length-1 && i === this.upcomingList[id].data.length-1) {
                        this.uploadUpcomingData(id);
                    }
                }
            }
        },
        async uploadUpcomingData(id) {
            const docData = {
                language: this.upcomingList[id].language,
                data: this.upcomingList[id].data,
            }
            await setDoc(doc(db, "upcoming", this.upcomingList[id].name), docData).then(() => {
                this.loading = false;
                this.uploaded = true;
            });
        },
        async resetUpcoming(id) {
            this.loading = true;
            if (this.upcomingList[id].uploaded) {
                for (let i = 0; i < this.upcomingList[id].images.length; i++) {
                    this.upcomingList[id].images[i].main.name = null;
                    this.upcomingList[id].images[i].main.image = null;
                    this.upcomingList[id].images[i].main.url = null;
                    this.upcomingList[id].images[i].gallery = [];
                    this.upcomingList[id].images[i].deleted = [];
                }
                const docRef = doc(db, "upcoming", this.upcomingList[id].name);
                // get movie data
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.upcomingList[id].data = docSnap.data().data;
                    for (let i = 0; i < this.upcomingList[id].data.length; i++) {
                        if (typeof this.upcomingList[id].data[i].date === 'object') {
                            this.upcomingList[id].data[i].date = new Date(this.upcomingList[id].data[i].date.seconds*1000);
                        }
                        // get movie main image
                        this.upcomingList[id].images[i].main.name = this.upcomingList[id].data[i].main.name;
                        this.upcomingList[id].images[i].main.url = this.upcomingList[id].data[i].main.url;
                        // get movie gallery
                        for (let j = 0; j < this.upcomingList[id].data[i].gallery.length; j++) {
                            this.upcomingList[id].images[i].gallery.push({
                                id: this.upcomingList[id].data[i].gallery.length,
                                name: this.upcomingList[id].data[i].gallery[j].name,
                                uploaded: true,
                                image: null,
                                url: this.upcomingList[id].data[i].gallery[j].url
                            });
                        }
                    }
                }
            }
            this.loading = false;
        }
    }
})