<template>
  <div class="schedule">
    <TheLoading v-show="scheduleStore.loading" />
    <EventCalendar />
  </div>
</template>

<script setup>
import {useScheduleStore} from "@/stores/schedule";
import TheLoading from "@/components/admin/TheLoading";
import EventCalendar from "@/components/admin/EventCalendar";

const scheduleStore = useScheduleStore()

</script>

<script>
export default {
  name: "AdminSchedule"
}
</script>

<style scoped>

</style>