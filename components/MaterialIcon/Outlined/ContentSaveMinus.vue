<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-content-save-minus-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5 3C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H12.81C12.45 20.38 12.2 19.7 12.08 19H5V5H16.17L19 7.83V12.08C19.7 12.2 20.38 12.45 21 12.81V7L17 3H5M6 6V10H15V6H6M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18C12 16.11 12.89 14.34 14.39 13.21C13.85 12.5 13 12 12 12M14 17V19H22V17H14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedContentSaveMinus',
  mixins: [icon]
};
</script>