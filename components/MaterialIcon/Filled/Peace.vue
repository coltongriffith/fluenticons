<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-peace" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.41V19.93C9.58,19.75 8.23,19.19 7.1,18.31L11,14.41M13,14.41L16.9,18.31C15.77,19.19 14.42,19.75 13,19.93V14.41M4,12C4,7.97 7,4.57 11,4.07V11.59L5.69,16.9C4.59,15.5 4,13.78 4,12M18.31,16.9L13,11.59V4.07C17,4.57 20,7.97 20,12C20,13.78 19.41,15.5 18.31,16.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPeace.svg',
  mixins: [icon]
};
</script>