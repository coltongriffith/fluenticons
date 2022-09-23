<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-screw-machine-round-top" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.5,7.3L13.5,8V7H10.5V10L9.5,10.7V11.7L14.5,8.4V7.3M14.5,11.3L13.5,12V10L10.5,12V14L9.5,14.7V15.7L14.5,12.4V11.3M14.5,15.3L13.5,16V14L10.5,16V18L9.5,18.7V19.7L14.5,16.4V15.3M7,6H17C17,6 16,3 12,3C8,3 7,6 7,6M13.5,18V21H10.5V20L13.5,18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScrewMachineRoundTop.svg',
  mixins: [icon]
};
</script>