<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lightbulb-spot-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L15.11 17H9L9 14C6.5 12.57 4 11 4 6V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M22 4V2H5.2L7.2 4H22M20 6H9.2L16.37 13.17C18.33 11.87 20 10.07 20 6M13 22H15V19H13V22M9 22H11V19H9L9 22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLightbulbSpotOff.svg',
  mixins: [icon]
};
</script>