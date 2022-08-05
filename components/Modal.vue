<template>
  <div class="modal-container">
    <div class="modal-overlay" @click="close" />
    <div class="modal">
      <div class="p-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
}
</script>
