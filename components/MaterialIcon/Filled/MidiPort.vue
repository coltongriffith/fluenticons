<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-midi-port" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M20.18,12C20.18,8.18 17.55,4.96 14,4.07V6H10V4.07C6.45,4.96 3.82,8.18 3.82,12A8.18,8.18 0 0,0 12,20.18A8.18,8.18 0 0,0 20.18,12M7,10.64A1.36,1.36 0 0,1 8.36,12A1.36,1.36 0 0,1 7,13.36C6.25,13.36 5.64,12.75 5.64,12C5.64,11.25 6.25,10.64 7,10.64M17,10.64A1.36,1.36 0 0,1 18.36,12A1.36,1.36 0 0,1 17,13.36A1.36,1.36 0 0,1 15.64,12A1.36,1.36 0 0,1 17,10.64M8.36,14.27A1.37,1.37 0 0,1 9.73,15.64C9.73,16.39 9.12,17 8.36,17A1.36,1.36 0 0,1 7,15.64C7,14.88 7.61,14.27 8.36,14.27M15.64,14.27C16.39,14.27 17,14.88 17,15.64A1.36,1.36 0 0,1 15.64,17C14.88,17 14.27,16.39 14.27,15.64A1.37,1.37 0 0,1 15.64,14.27M12,15.64A1.36,1.36 0 0,1 13.36,17A1.36,1.36 0 0,1 12,18.36A1.36,1.36 0 0,1 10.64,17A1.36,1.36 0 0,1 12,15.64Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMidiPort.svg',
  mixins: [icon]
};
</script>