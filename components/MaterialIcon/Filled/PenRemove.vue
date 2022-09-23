<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pen-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.7,7C20.4,7.4 20,7.7 20,8C20,8.3 20.3,8.6 20.6,9C21.1,9.5 21.6,9.9 21.5,10.4C21.5,10.9 21,11.4 20.5,11.9L16.4,16L15,14.7L19.2,10.5L18.2,9.5L16.8,10.9L13,7.1L17,3.3C17.4,2.9 18,2.9 18.4,3.3L20.7,5.6C21.1,6 21.1,6.7 20.7,7M3,17.2L12.6,7.6L16.3,11.4L6.8,21H3V17.2M3.88,2.46L6,4.59L8.12,2.46L9.54,3.88L7.41,6L9.54,8.12L8.12,9.54L6,7.41L3.88,9.54L2.46,8.12L4.59,6L2.46,3.88L3.88,2.46Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPenRemove.svg',
  mixins: [icon]
};
</script>