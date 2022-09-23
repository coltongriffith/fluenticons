<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-developer-board" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22,9V7H20V5A2,2 0 0,0 18,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H18A2,2 0 0,0 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDeveloperBoard.svg',
  mixins: [icon]
};
</script>