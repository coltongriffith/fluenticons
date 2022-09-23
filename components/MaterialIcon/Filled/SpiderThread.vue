<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-spider-thread" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 2V7.08A5.47 5.47 0 0 0 12 7A5.47 5.47 0 0 0 11 7.08V2M16.9 15A5 5 0 0 1 16.73 15.55L20 17.42V22H18V18.58L15.74 17.29A4.94 4.94 0 0 1 8.26 17.29L6 18.58V22H4V17.42L7.27 15.55A5 5 0 0 1 7.1 15H5.3L2.55 16.83L1.45 15.17L4.7 13H7.1A5 5 0 0 1 7.37 12.12L5.81 11.12L2.24 12L1.76 10L6.19 8.92L8.5 10.45A5 5 0 0 1 15.5 10.45L17.77 8.92L22.24 10L21.76 12L18.19 11.11L16.63 12.11A5 5 0 0 1 16.9 13H19.3L22.55 15.16L21.45 16.82L18.7 15M11 14A1 1 0 1 0 10 15A1 1 0 0 0 11 14M15 14A1 1 0 1 0 14 15A1 1 0 0 0 15 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSpiderThread.svg',
  mixins: [icon]
};
</script>