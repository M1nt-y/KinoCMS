import { defineStore } from 'pinia'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useBannersStore = defineStore({
    id: 'Banners',
    state: () => ({
        movieBanners: {
            data: [],
            banners: [],
            deletedBanners: [],
            rotationSpeed: 0
        },
        background: {
            selected: '',
            banner: {
                name: '',
                url: null
            },
            file: null,
            color: ''
        },
        newsBanners: {
            data: [],
            banners: [],
            deletedBanners: [],
            rotationSpeed: 0
        },
        loading: false
    }),
    actions: {
        async getMovieBanners() {
            this.loading = true;
            this.movieBanners.data = [];
            this.movieBanners.banners = [];
            this.movieBanners.deletedBanners = [];
            const docRef = doc(db, "banners", "movies");
            // get movie banners data
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.movieBanners.rotationSpeed = docSnap.data().rotationSpeed;
                this.movieBanners.data = docSnap.data().data;
                for (let i = 0; i < this.movieBanners.data.length; i++) {
                    this.movieBanners.banners.push({
                        id: i,
                        uploaded: true,
                        image: null,
                        url: this.movieBanners.data[i].image
                    });
                }
            }
            this.loading = false;
        },
        deleteMovieBanner(id) {
            if (this.movieBanners.banners[id].uploaded) {
                this.movieBanners.deletedBanners.push(this.movieBanners.data[id].name);
            }
            this.movieBanners.banners.splice(id, 1);
            this.movieBanners.data.splice(id, 1);
            for (let i = 0; i < this.movieBanners.data.length; i++) {
                if (this.movieBanners.data[i].id !== i && this.movieBanners.banners[i].id !== i) {
                    this.movieBanners.data[i].id = this.movieBanners.banners[i].id = i;
                }
            }
        },
        async uploadMovieBanners() {
            this.loading = true;
            // delete banners
            if (this.movieBanners.deletedBanners.length !== 0) {
                for (let i = 0; i < this.movieBanners.deletedBanners.length; i++) {
                    const delRef = ref(storage, "banners/movies/" + this.movieBanners.deletedBanners[i]);
                    await deleteObject(delRef).then(() => {
                        this.movieBanners.deletedBanners.splice(i, 1);
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }
            // upload banners
            for (let i = 0; i < this.movieBanners.banners.length; i++) {
                if (this.movieBanners.banners[i].image !== null) {
                    try {
                        const bannersRef = ref(storage, "banners/movies/" + this.movieBanners.data[i].name);
                        await uploadBytes(bannersRef, this.movieBanners.banners[i].image).then(async () => {
                            await getDownloadURL(bannersRef).then((url) => {
                                this.movieBanners.data[i].image = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading banners: ", e);
                    }
                }
            }
            for (let i = 0; i < this.movieBanners.data.length; i++) {
                if (i === this.movieBanners.data.length - 1 && this.movieBanners.data[i].image !== null) {
                    this.uploadMoviesData();
                }
            }
        },
        async uploadMoviesData() {
            const docData = {
                data: this.movieBanners.data,
                rotationSpeed: this.movieBanners.rotationSpeed
            }
            await setDoc(doc(db, "banners", "movies"), docData).then(() => {
                this.loading = false;
            });
        },
        async getBackground() {
            this.loading = true;
            this.background.selected = '';
            this.background.banner.name = '';
            this.background.color = '';
            this.background.banner.image = null;
            this.background.file = null;
            const docRef = doc(db, "banners", "background");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.background.selected = docSnap.data().selected;
                this.background.banner = docSnap.data().banner;
                this.background.color = docSnap.data().color;
            }
            else {
                this.background.banner.name = 'banner-' + Date.now();
                this.background.color = '#121212';
            }
            this.loading = false;
        },
        async uploadBackground() {
            this.loading = true;
            if (this.background.file !== null) {
                try {
                    const bannersRef = ref(storage, "banners/background/" + this.background.banner.name);
                    await uploadBytes(bannersRef, this.background.file).then(async () => {
                        await getDownloadURL(bannersRef).then((url) => {
                            this.background.banner.url = url;
                            this.uploadBackgrondData();
                        });
                    });
                } catch (e) {
                    console.error("Error uploading banners: ", e);
                }
            }
            else {
                this.uploadBackgrondData();
            }
        },
        async uploadBackgrondData() {
            try {
                await setDoc(doc(db, "banners", "background"), {
                    selected: this.background.selected,
                    banner: this.background.banner,
                    color: this.background.color
                });
            }
            catch (e) {
                console.error("Error uploading banners data: ", e);
            }
            this.loading = false;
        },
        async getNewsBanners() {
            this.loading = true;
            this.newsBanners.data = [];
            this.newsBanners.banners = [];
            this.newsBanners.deletedBanners = [];
            const docRef = doc(db, "banners", "news");
            // get news banners data
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.newsBanners.rotationSpeed = docSnap.data().rotationSpeed;
                this.newsBanners.data = docSnap.data().data;
                for (let i = 0; i < this.newsBanners.data.length; i++) {
                    this.newsBanners.banners.push({
                        id: i,
                        uploaded: true,
                        image: null,
                        url: this.newsBanners.data[i].image
                    });
                }
            }
            this.loading = false;
        },
        deleteNewsBanner(id) {
            if (this.newsBanners.banners[id].uploaded) {
                this.newsBanners.deletedBanners.push(this.newsBanners.data[id].name);
            }
            this.newsBanners.data.splice(id, 1);
            this.newsBanners.banners.splice(id, 1);
            for (let i = 0; i < this.newsBanners.data.length; i++) {
                if (this.newsBanners.data[i].id !== i && this.newsBanners.banners[i].id !== i) {
                    this.newsBanners.data[i].id = this.newsBanners.banners[i].id = i;
                }
            }
        },
        async uploadNewsBanners() {
            this.loading = true;
            // delete banners
            if (this.newsBanners.deletedBanners.length !== 0) {
                for (let i = 0; i < this.newsBanners.deletedBanners.length; i++) {
                    const delRef = ref(storage, "banners/news/" + this.newsBanners.deletedBanners[i]);
                    await deleteObject(delRef).then(() => {
                        this.newsBanners.deletedBanners.splice(i, 1);
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }
            // upload banners
            for (let i = 0; i < this.newsBanners.banners.length; i++) {
                if (this.newsBanners.banners[i].image !== null) {
                    try {
                        const bannersRef = ref(storage, "banners/news/" + this.newsBanners.data[i].name);
                        await uploadBytes(bannersRef, this.newsBanners.banners[i].image).then(async () => {
                            await getDownloadURL(bannersRef).then(async (url) => {
                                this.newsBanners.data[i].image = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading banners: ", e);
                    }
                }
            }
            for (let i = 0; i < this.newsBanners.data.length; i++) {
                if (i === this.newsBanners.data.length - 1 && this.newsBanners.data[i].image !== null) {
                    this.uploadNewsData();
                }
            }
        },
        async uploadNewsData() {
            const docData = {
                data: this.newsBanners.data,
                rotationSpeed: this.newsBanners.rotationSpeed
            }
            await setDoc(doc(db, "banners", "news"), docData).then(() => {
                this.loading = false;
            });
        }
    }
})
