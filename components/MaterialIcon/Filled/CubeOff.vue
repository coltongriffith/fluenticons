<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cube-off" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L17.28 19.17L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L4.3 6.19L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M12 4.15L17.96 7.5L13.31 10.11L20.53 17.33C20.82 17.16 21 16.85 21 16.5V7.5C21 7.12 20.79 6.79 20.47 6.62L12.57 2.18C12.41 2.06 12.21 2 12 2S11.59 2.06 11.43 2.18L7.56 4.36L9 5.82L12 4.15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCubeOff',
  mixins: [icon]
};
</script>