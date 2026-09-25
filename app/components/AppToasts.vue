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
        <a
          v-if="toast.sponsored && sponsor"
          :href="href('toast')"
          target="_blank"
          rel="sponsored noopener"
          class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-normal text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
          @click="click('toast')"
        >
          <img
            v-if="sponsor.logo"
            :src="sponsor.logo"
            alt=""
            width="16"
            height="16"
            class="h-4 w-4 rounded object-contain"
          />
          <span>Sponsored by <span class="font-medium underline underline-offset-2">{{ sponsor.name }}</span></span>
        </a>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
const { toasts } = useToast();
const { sponsor, href, click } = useSponsor();
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
