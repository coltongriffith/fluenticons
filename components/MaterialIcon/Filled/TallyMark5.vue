<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tally-mark-5" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 10.73V19H17V11.36L15 12V19H13V12.62L11 13.26V19H9V13.89L7 14.5V19H5V15.15L2.57 15.92L2 14L5 13.05V5H7V12.42L9 11.79V5H11V11.16L13 10.53V5H15V9.9L17 9.26V5H19V8.63L21 8L21.57 9.92L19 10.73Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTallyMark5.svg',
  mixins: [icon]
};
</script>