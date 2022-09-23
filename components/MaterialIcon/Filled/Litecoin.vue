<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-litecoin" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.55,15.92L13.16,13.78L14.81,13.19L16.25,7.63L14.56,8.31L16.25,2H8L5.38,11.77L3.72,12.34L2.22,17.91L4,17.27L2.66,22H20.16L21.78,15.92H12.55M19.39,21H4L5.46,15.65L3.72,16.3L4.58,13.11L6.24,12.54L8.74,3H15L13.13,10L14.83,9.3L14,12.42L12.33,13L11.22,16.91H20.5L19.39,21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLitecoin.svg',
  mixins: [icon]
};
</script>