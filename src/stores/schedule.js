import { defineStore } from 'pinia';
import {collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/firebase";


export const useScheduleStore = defineStore({
    id: 'Schedule',
    state: () => ({
        loading: false,
        eventDate: null,
        selectedCinema: null,
        selectedHall: null,
        selectedMovie: null,
        moviePrice: null,
        scheduledEvents: []
    }),
    actions: {
        async getSchedule() {
            this.loading = true;
            this.scheduledEvents = [];
            const scheduleData = await getDocs(collection(db, 'schedule'));
            scheduleData.forEach((doc) => {
                this.scheduledEvents.push({
                    id: this.scheduledEvents.length,
                    name: doc.id,
                    title: doc.data().title,
                    start: doc.data().start,
                    end: doc.data().end,
                    selectedCinema: doc.data().selectedCinema,
                    selectedHall: doc.data().selectedHall,
                    selectedMovie: doc.data().selectedMovie,
                    moviePrice: doc.data().moviePrice
                });
            });
            for (let i = 0; i < this.scheduledEvents.length; i++) {
                if (typeof this.scheduledEvents[i].end === 'object') {
                    this.scheduledEvents[i].end = new Date(this.scheduledEvents[i].end.seconds*1000);
                }
            }
            this.loading = false;
        },
        async deleteEvent(id) {
            this.loading = true;
            await deleteDoc(doc(db, "schedule", this.scheduledEvents[id].name));
            this.loading = false;
        },
        async uploadEvent(id) {
            this.loading = true;
            const eventData = {
                title: `${this.scheduledEvents[id].selectedCinema} - ${this.scheduledEvents[id].selectedMovie}`,
                start: this.scheduledEvents[id].start,
                end: this.scheduledEvents[id].end,
                selectedCinema: this.scheduledEvents[id].selectedCinema,
                selectedHall: this.scheduledEvents[id].selectedHall,
                selectedMovie: this.scheduledEvents[id].selectedMovie,
                moviePrice: this.scheduledEvents[id].moviePrice
            }
            await setDoc(doc(db, "schedule", this.scheduledEvents[id].name), eventData).then(() => {
                this.loading = false;
            });
        }
    }
})