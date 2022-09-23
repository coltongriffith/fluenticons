<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lightbulb-fluorescent-tube-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.05 2.81L6.5 3.34L5.11 1.92L3.87 3.16L5.28 4.58L4.58 5.28L3.16 3.87L1.92 5.11L3.34 6.5L2.81 7.05L4.22 8.46L15.54 19.78L16.95 21.19L17.5 20.66L18.89 22.08L20.13 20.84L18.72 19.43L19.43 18.72L20.84 20.13L22.08 18.89L20.66 17.5L21.19 16.95L19.78 15.54L8.46 4.22M7.05 5.64L18.36 16.95L16.95 18.36L5.64 7.05Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedLightbulbFluorescentTube',
  mixins: [icon]
};
</script>