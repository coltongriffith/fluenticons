<template>
  <span
    class="icon-mask"
    :style="{ '--icon': `url(${src || `/icons/${file}`})` }"
    aria-hidden="true"
  ></span>
</template>

<script setup>
// Draws an icon from its static SVG file (or `src`, a full URL) in the current
// text color. Used for large lists so the page doesn't carry every icon's markup.
defineProps({
  file: { type: String, default: "" },
  src: { type: String, default: "" },
});
</script>
