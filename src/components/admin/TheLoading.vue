<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "TheLoading"
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2023;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading span {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border: 3px solid transparent;
  border-top-color: #FFFFFF;
  border-bottom-color: #FFFFFF;
  border-radius: 50%;
  animation: spin ease 1000ms infinite;
}
</style>