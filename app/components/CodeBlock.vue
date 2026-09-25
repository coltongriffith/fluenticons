<template>
  <figure class="not-prose my-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
    <figcaption class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-1.5 text-xs text-gray-500 dark:text-gray-400">
      <span class="font-mono">{{ label }}</span>
      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 hover:text-gray-900 dark:hover:text-white"
        @click="copy"
      >
        <FluentSvg ui="copy_24_regular" class="h-3.5 w-3.5" />{{ copied ? "Copied" : "Copy" }}
      </button>
    </figcaption>
    <pre class="overflow-x-auto px-4 py-3 text-[13px] leading-relaxed text-gray-800 dark:text-gray-100"><code>{{ code }}</code></pre>
  </figure>
</template>

<script setup>
// A code sample with a label (language or file name) and a Copy button.
// Emits "copy" after copying, for analytics.
const props = defineProps({
  code: { type: String, required: true },
  label: { type: String, default: "" },
});
const emit = defineEmits(["copy"]);

const toast = useToast();
const copied = ref(false);
let timer;
async function copy() {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied.value = false), 1500);
    emit("copy");
  } catch (err) {
    toast.error(err.message);
  }
}
</script>
