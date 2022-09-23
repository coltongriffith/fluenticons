<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-umbrella-beach" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.13 14.56L14.56 13.13L21 19.57L19.57 21L13.13 14.56M17.42 8.83L20.28 5.97C16.33 2 9.93 2 6 5.95C9.91 4.65 14.29 5.7 17.42 8.83M5.95 6C2 9.93 2 16.33 5.97 20.28L8.83 17.42C5.7 14.29 4.65 9.91 5.95 6M5.97 5.96L5.96 5.97C5.58 9 7.13 12.85 10.26 16L16 10.26C12.86 7.13 9 5.58 5.97 5.96Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledUmbrellaBeach.svg',
  mixins: [icon]
};
</script>