<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-image-refresh" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 18.5C12 19.39 12.18 20.23 12.5 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.89 21 5V12.5C20.23 12.18 19.39 12 18.5 12C17.29 12 16.16 12.34 15.19 12.92L14.5 12L11 16.5L8.5 13.5L5 18H12.03C12 18.17 12 18.33 12 18.5M22 18.5V14.5L20.83 15.67C20.11 14.95 19.11 14.5 18 14.5C15.79 14.5 14 16.29 14 18.5S15.79 22.5 18 22.5C19.68 22.5 21.12 21.47 21.71 20H20C19.54 20.61 18.82 21 18 21C16.62 21 15.5 19.88 15.5 18.5S16.62 16 18 16C18.69 16 19.32 16.28 19.77 16.73L18 18.5H22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledImageRefresh.svg',
  mixins: [icon]
};
</script>