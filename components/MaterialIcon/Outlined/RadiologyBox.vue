<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-radiology-box-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 5V19H5V5H19M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M12 6C12.55 6 13 6.45 13 7V8H16.17C16.35 8.31 16.5 8.65 16.66 9H13V10H17C17.1 10.33 17.17 10.67 17.19 11H13V12H17.2C17.16 12.35 17.15 12.69 17.1 13H13V14H17C17 14 16.94 17 15.5 17C14.15 17 14.5 15.47 13 15V17C13 17.55 12.55 18 12 18S11 17.55 11 17V15C9.5 15.47 9.85 17 8.5 17C7.06 17 7 14 7 14H11V13H6.9C6.85 12.69 6.84 12.35 6.8 12H11V11H6.81C6.83 10.67 6.91 10.33 7 10H11V9H7.34C7.5 8.65 7.65 8.31 7.83 8H11V7C11 6.45 11.45 6 12 6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedRadiologyBox',
  mixins: [icon]
};
</script>