<template>
  <div class="wrapper">
    <the-navbar />
    <the-sidebar />
    <div class="content-wrapper">
      <router-view />
    </div>
    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    <aside class="control-sidebar control-sidebar-dark">

    </aside>
  </div>
</template>

<script setup>
import TheSidebar from "@/components/TheSidebar";
import TheNavbar from "@/components/TheNavbar";
import {useMainStore} from "@/stores/main";
import {onMounted} from "vue";


const mainStore = useMainStore();
onMounted(() => {
  if (!mainStore.isActive) {
    document.documentElement.style.overflowY = 'auto'
  }
  else {
    document.documentElement.style.overflowY = 'hidden'
  }
})

</script>


<script>


export default {
  name: "AdminLayout"
}
</script>

<style scoped>

</style>