<template>
  <div class="event">
    <EventModal
        :show="showModal"
        :selectedDate="eventDate"
        :selectedId="eventId"
        @closeModal="toggleModal"
        @addEvent="handleAddEvent"
        @deleteEvent="handleDeleteEvent"
    />
    <FullCalendar :options="calendarOptions" />
    <div class="event__add" @click="toggleModal" />
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useScheduleStore} from "@/stores/schedule";
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import EventModal from "@/components/admin/EventModal";


const scheduleStore = useScheduleStore();

const eventDate = ref('');
const eventId = ref(null);
const showModal = ref(false);
function toggleModal() {
  showModal.value = !showModal.value;
  scheduleStore.selectedCinema = scheduleStore.selectedHall = scheduleStore.selectedMovie = scheduleStore.eventDate = scheduleStore.moviePrice = eventDate.value = eventId.value = null;
}

const calendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,listDay'
  },

  weekends: true,
  dateClick: (arg) => {
    eventDate.value = arg.dateStr;
    eventId.value = null;
    showModal.value = true;
  },
  eventClick: (arg) => {
    let id = arg.event.id;
    eventId.value = arg.event.id;
    eventDate.value = arg.event.startStr.replace(/T.*$/, '');
    scheduleStore.selectedCinema = scheduleStore.scheduledEvents[id].selectedCinema;
    scheduleStore.selectedHall = scheduleStore.scheduledEvents[id].selectedHall;
    scheduleStore.selectedMovie = scheduleStore.scheduledEvents[id].selectedMovie;
    scheduleStore.moviePrice = scheduleStore.scheduledEvents[id].moviePrice;
    scheduleStore.eventDate = arg.event.start;
    showModal.value = true;
  },
  events: []
});

scheduleStore.getSchedule().then(() => {
  calendarOptions.events = scheduleStore.scheduledEvents
});

function handleAddEvent() {
  showModal.value = false;
  if (eventId.value === null) {
    calendarOptions.events.push({
      id: calendarOptions.events.length,
      title: `${scheduleStore.selectedCinema} - ${scheduleStore.selectedMovie}`,
      start: scheduleStore.eventDate,
      end: new Date(scheduleStore.eventDate + 2 * (60 * 60 * 1000)),
      name: 'event-' + Date.now(),
      uploaded: false,
      selectedCinema: scheduleStore.selectedCinema,
      selectedHall: scheduleStore.selectedHall,
      selectedMovie: scheduleStore.selectedMovie,
      moviePrice: scheduleStore.moviePrice
    });
    scheduleStore.scheduledEvents = calendarOptions.events;
    scheduleStore.uploadEvent(calendarOptions.events.length-1);
  }
  else {
    let id = Number(eventId.value);
    calendarOptions.events[id].title = `${scheduleStore.selectedCinema} - ${scheduleStore.selectedMovie}`;
    calendarOptions.events[id].start = scheduleStore.eventDate;
    calendarOptions.events[id].end = new Date(scheduleStore.eventDate + 2 * (60 * 60 * 1000));
    calendarOptions.events[id].selectedCinema = scheduleStore.selectedCinema;
    calendarOptions.events[id].selectedHall = scheduleStore.selectedHall;
    calendarOptions.events[id].selectedMovie = scheduleStore.selectedMovie;
    calendarOptions.events[id].moviePrice = scheduleStore.moviePrice;
    scheduleStore.scheduledEvents = calendarOptions.events;
    scheduleStore.uploadEvent(id);
  }
  scheduleStore.selectedCinema = scheduleStore.selectedHall = scheduleStore.selectedMovie = scheduleStore.eventDate = scheduleStore.moviePrice = eventDate.value = eventId.value = null;
}

function handleDeleteEvent() {
  showModal.value = false;
  if (eventId.value !== null) {
    let id = Number(eventId.value);
    scheduleStore.deleteEvent(id);
    calendarOptions.events.splice(id, 1);
    calendarOptions.events.forEach((event, index) => {
      if (event.id !== index) {
        event.id = index;
      }
    });
    scheduleStore.scheduledEvents = calendarOptions.events;
  }
  scheduleStore.selectedCinema = scheduleStore.selectedHall = scheduleStore.selectedMovie = scheduleStore.eventDate = scheduleStore.moviePrice = eventDate.value = eventId.value = null;
}

</script>

<script>
export default {
  name: "EventCalendar"
}
</script>

<style scoped>

.event__add {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  background: #00c4ff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}
</style>

<style>
.fc-daygrid-day-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  transition: background-color 0.3s ease;
  z-index: 5;
}
.fc-daygrid-day-bg:hover {
  background-color: rgba(0,0,0,0.1);
}
.fc-daygrid-event-harness {
  z-index: 6;
}
.fc-daygrid-day,
.fc-daygrid-event-harness,
.fc-list-event {
  cursor: pointer;
}
</style>