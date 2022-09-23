<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bus-stop-uncovered" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 22V19H4V22H2V14A1 1 0 0 1 3 13A1 1 0 0 1 4 14V17H7A1 1 0 0 1 8 18V22M20 11V22H19V11A2.5 2.5 0 1 1 20 11M15 11.55V16H14V22H12.5V17H11.5V22H10V16H9V11.5A1.5 1.5 0 0 1 10.5 10H13.5A1.5 1.5 0 0 1 15 11.5M12 6.55A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBusStopUncovered.svg',
  mixins: [icon]
};
</script>