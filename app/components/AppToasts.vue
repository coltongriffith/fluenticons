<template>
  <div class="fixed top-4 right-4 z-[100] flex flex-col items-end space-y-2" aria-live="polite">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="rounded-lg px-4 py-3 text-sm font-medium shadow-md"
        :class="
          toast.type === 'error'
            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
            : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100'
        "
      >
        {{ toast.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
const { toasts } = useToast();
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
