<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">

    <a href="/" class="brand-link">
      <img src="/adminlte/dist/img/AdminLTELogo.png" alt="KinoCMS" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">KinoCMS</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
<!--        <div class="image">-->
<!--          <img src="/adminlte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">-->
<!--        </div>-->
        <div class="info">
          <a href="#" class="d-block">Admin</a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <nav-item icon="" link="/admin">
            Statistics
          </nav-item>
          <nav-item icon="" link="/admin/banners">
            Banners
          </nav-item>
          <nav-item icon="" link="/admin/movies">
            Movies
          </nav-item>
          <nav-item icon="" link="/admin/cinemas">
            Cinemas
          </nav-item>
          <nav-item icon="" link="/admin/schedule">
            Schedule
          </nav-item>
          <nav-item icon="" link="/admin/news">
            News
          </nav-item>
          <nav-item icon="" link="/admin/specials">
            Specials
          </nav-item>
          <nav-item icon="" link="/admin/pages">
            Pages
          </nav-item>
          <nav-item icon="" link="/admin/users">
            Users
          </nav-item>
          <nav-item icon="" link="/admin/newsletter">
            Newsletter
          </nav-item>
        </ul>
      </nav>

    </div>

  </aside>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
  name: "TheSidebar",
  components: {NavItem}
}
</script>

<style scoped>

</style>