<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alert-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 19C14 16.21 15.91 13.87 18.5 13.2L12 2L1 21H14.35C14.13 20.37 14 19.7 14 19M13 18H11V16H13V18M13 14H11V10H13V14M23.54 16.88L21.41 19L23.54 21.12L22.12 22.54L20 20.41L17.88 22.54L16.47 21.12L18.59 19L16.47 16.88L17.88 15.47L20 17.59L22.12 15.46L23.54 16.88Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAlertRemove.svg',
  mixins: [icon]
};
</script>