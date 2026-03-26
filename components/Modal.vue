<template>
  <div class="modal-container">
    <div class="modal-overlay" @click="$emit('close')" />
    <div class="modal">
      <div class="p-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
