<template>
  <li class="nav-item">
    <router-link class="nav-link" :class="{ active : isActive }" :to="link">
      <i class="nav-icon" :class="icon" v-if="icon" ></i>
      <p><slot/></p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    icon: {
      type: String,
      default: null
    },
    link: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    isActive() {
      if (typeof this.link === 'object') {
        return this.$route.name === this.link.name
      }
      else {
        return this.$route.path === this.link;
      }
    }
  }
}
</script>

<style scoped>

</style>