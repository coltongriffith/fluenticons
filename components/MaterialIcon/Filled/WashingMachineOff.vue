<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-washing-machine-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20C4 21.11 4.89 22 6 22H18C18.58 22 19.1 21.75 19.46 21.35L20.84 22.73L22.11 21.46M12 20C8.69 20 6 17.31 6 14C6 12.32 6.7 10.8 7.82 9.71L12.06 13.95L9.17 16.83C10.73 18.39 13.27 18.39 14.83 16.83C14.85 16.81 14.86 16.79 14.88 16.77L16.29 18.18C15.2 19.3 13.69 20 12 20M11.25 8.05C11.5 8 11.75 8 12 8C15.31 8 18 10.69 18 14C18 14.25 18 14.5 17.95 14.75L20 16.8V4C20 2.9 19.11 2 18 2H6C5.76 2 5.54 2.05 5.33 2.13L11.25 8.05M10 4C10.55 4 11 4.45 11 5S10.55 6 10 6 9 5.55 9 5 9.45 4 10 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWashingMachineOff.svg',
  mixins: [icon]
};
</script>