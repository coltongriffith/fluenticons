<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alert-remove-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 15.5H13V17.5H11V15.5M14 19C14 18.86 14 18.73 14 18.6H5.4L12 7.3L16.11 14.44C16.62 14 17.2 13.65 17.84 13.41L12 3.3L2 20.6H14.22C14.08 20.09 14 19.56 14 19M13 10.5H11V14.5H13V10.5M22.12 15.46L20 17.59L17.88 15.46L16.47 16.88L18.59 19L16.47 21.12L17.88 22.54L20 20.41L22.12 22.54L23.54 21.12L21.41 19L23.54 16.88L22.12 15.46Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedAlertRemove',
  mixins: [icon]
};
</script>