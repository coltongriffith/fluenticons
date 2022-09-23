<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-deathly-hallows" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2L1,21H23L12,2M12.75,11.47C14.56,11.87 15.7,13.67 15.3,15.5C15,16.75 14,17.75 12.75,18.03V11.47M11.25,18C9.44,17.6 8.3,15.8 8.7,14C9,12.72 10,11.72 11.25,11.44V18M16.88,14.72C16.83,12.35 15.09,10.36 12.75,10V6.29L20.4,19.5H13.07C15.29,19 16.87,17.03 16.88,14.75V14.72M11.25,6.29V10C8.6,10.4 6.77,12.88 7.18,15.54C7.5,17.5 8.97,19.12 10.93,19.55H3.6L11.25,6.29Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDeathlyHallows.svg',
  mixins: [icon]
};
</script>