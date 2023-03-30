import { defineStore } from 'pinia';
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/firebase/firebase";


export const useMainStore = defineStore({
    id: "Main",
    state: () => ({
        isActive: false,
        currentLanguage: {
            selected: 'en',
            index: 0
        },
    }),
    actions: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
        async getBooking(id) {
            const docRef = doc(db, "booking", "event-" + id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                return undefined
            }
        },
        async updateBooking(id, data) {
            const docData = Object.assign({}, data);
            await setDoc(doc(db, "booking", 'event-' + id), docData);
        }
    }
});