<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gamepad-circle-down" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5,8A4,4 0 0,1 9,12A4,4 0 0,1 5,16A4,4 0 0,1 1,12A4,4 0 0,1 5,8M12,1A4,4 0 0,1 16,5A4,4 0 0,1 12,9A4,4 0 0,1 8,5A4,4 0 0,1 12,1M12,15A4,4 0 0,1 16,19A4,4 0 0,1 12,23A4,4 0 0,1 8,19A4,4 0 0,1 12,15M19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A4,4 0 0,1 15,12A4,4 0 0,1 19,8M12,3A2,2 0 0,0 10,5A2,2 0 0,0 12,7A2,2 0 0,0 14,5A2,2 0 0,0 12,3M5,10A2,2 0 0,0 3,12A2,2 0 0,0 5,14A2,2 0 0,0 7,12A2,2 0 0,0 5,10M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGamepadCircleDown.svg',
  mixins: [icon]
};
</script>