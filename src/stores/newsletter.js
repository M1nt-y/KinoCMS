import { defineStore } from 'pinia';
import { db, storage } from "@/firebase/firebase";
// import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {deleteObject, listAll, ref, uploadBytes} from "firebase/storage";
import {collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";


export const useNewsletterStore = defineStore({
    id: 'Newsletter',
    state: () => ({
        loading: false,
        showModal: false,
        smsUsers: [],
        emailUsers: [],
        templateList: [],
        smsPicked: '',
        emailPicked: '',
        templatePicked: ''
    }),
    actions: {
        async getTemplates() {
            this.loading = true;
            this.templateList = [];
            const templatesFile = ref(storage, 'templates');
            const templatesData = await getDocs(collection(db, 'templates'));
            // get templates data
            templatesData.forEach((doc) => {
                this.templateList.push({
                    id: this.templateList.length,
                    name: doc.id,
                    uploaded: true,
                    file: null,
                    fileName: doc.data().fileName
                });
            });
            listAll(templatesFile).then((res) => {
                if (res.items.length !== 0) {
                    res.items.forEach((itemRef) => {
                        console.log(itemRef);
                        // getDownloadURL(ref(storage, itemRef.fullPath))
                        //     .then((url) => {
                        //         for (let i = 0; i < this.templateList.length; i++) {
                        //
                        //         }
                        //     })
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
            this.loading = false;
        },
        async deleteTemplate(id) {
            this.showModal = false;
            this.loading = true;
            if (this.templateList[id].fileName === this.templatePicked) {
                this.templatePicked = '';
            }
            if (this.templateList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "templates", this.templateList[id].name));
                // delete file
                const delRef = ref(storage, 'templates/' + this.templateList[id].name);
                deleteObject(delRef).catch((error) => {
                    console.error(error);
                });
            }
            this.templateList.splice(id, 1);
            for (let i = 0; i < this.templateList.length; i++) {
                if (this.templateList[i].id !== i) {
                    this.templateList[i].id = i;
                }
            }
            this.loading = false;
        },
        async uploadTemplates() {
            this.loading = true;
            for (let i = 0; i < this.templateList.length; i++) {
                if (this.templateList[i].file !== null) {
                    // upload file
                    try {
                        const templatesRef = ref(storage, "templates/" + this.templateList[i].name);
                        await uploadBytes(templatesRef, this.templateList[i].file);
                    } catch (e) {
                        console.error("Error uploading template: ", e);
                    }
                    // upload data
                    await setDoc(doc(db, "templates", this.templateList[i].name), {
                        fileName: this.templateList[i].fileName
                    });
                }
            }
            this.loading = false;
        }
    }
})