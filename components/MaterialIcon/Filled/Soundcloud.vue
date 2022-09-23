<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-soundcloud" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSoundcloud.svg',
  mixins: [icon]
};
</script>