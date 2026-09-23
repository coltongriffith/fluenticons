<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    v-html="body"
  />
</template>

<script setup>
// Renders an icon from its inner SVG markup. Pass `icon` (from loadIcons)
// or `ui` (a key from generated/ui-icons.json for the site's own UI icons).
const props = defineProps({
  icon: { type: Object, default: null },
  ui: { type: String, default: "" },
});

const size = computed(() => props.icon?.size || 24);
const body = computed(() => (props.ui ? uiIcon(props.ui) : props.icon?.body));
</script>
