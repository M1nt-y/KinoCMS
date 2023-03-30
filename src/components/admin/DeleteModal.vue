<template>
  <div class="modal-delete" @click="$emit('closeModal')">
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h1>Confirm deletion</h1>
        </div>
        <div class="modal-body">
          <h3>Are you sure you want to delete?</h3>
        </div>
        <div class="modal-footer justify-content-between">
          <button class="btn btn-default" @click="$emit('closeModal')">Cancel</button>
          <button class="btn btn-danger" @click="$emit('confirmDeletion')">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal"
}
</script>

<style scoped>
.modal-delete {
  top: 0;
  left: 0;
  z-index: 2023;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-delete__content {
  padding: 80px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>