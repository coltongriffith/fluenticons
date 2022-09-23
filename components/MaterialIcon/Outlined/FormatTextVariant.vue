<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-format-text-variant-outline" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 3C10.18 3 9.44 3.5 9.14 4.27L3.64 18.27C3.12 19.58 4.09 21 5.5 21H7.75C8.59 21 9.33 20.5 9.62 19.7L10.26 18H13.74L14.38 19.7C14.67 20.5 15.42 21 16.25 21H18.5C19.91 21 20.88 19.58 20.36 18.27L14.86 4.27C14.56 3.5 13.82 3 13 3M11 5H13L18.5 19H16.25L15.12 16H8.87L7.75 19H5.5M12 7.67L9.62 14H14.37Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFormatTextVariant',
  mixins: [icon]
};
</script>