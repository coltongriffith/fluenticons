<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cctv-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L18.11 20H17C15.9 20 15 19.1 15 18V16.89L12.66 14.55L11.81 15.04C10.86 15.59 9.63 15.26 9.08 14.31L7.58 11.71C7.18 11 7.25 10.18 7.68 9.57L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L10.77 7.57L17.86 14.66C18.26 14.22 18.5 13.64 18.5 13M2 12.62L5.5 18.68L8.03 15.5L6.03 12.03L2 12.62Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCctvOff.svg',
  mixins: [icon]
};
</script>