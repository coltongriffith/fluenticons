<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-image-text" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 13H14V11H22V13M22 7H14V9H22V7M14 17H22V15H14V17M12 9V15C12 16.1 11.1 17 10 17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H10C11.1 7 12 7.9 12 9M10.5 15L8.3 12L6.5 14.3L5.3 12.8L3.5 15H10.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledImageText.svg',
  mixins: [icon]
};
</script>