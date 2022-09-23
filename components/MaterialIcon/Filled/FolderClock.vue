<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-folder-clock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H10.26C11.57,21.88 13.71,23 16,23A7,7 0 0,0 23,16C23,14.17 22.28,12.42 21,11.11V8C21,6.89 20.1,6 19,6H11L9,4H3M16,11A5,5 0 0,1 21,16A5,5 0 0,1 16,21A5,5 0 0,1 11,16A5,5 0 0,1 16,11M15,12V17L18.61,19.16L19.36,17.94L16.5,16.25V12H15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFolderClock.svg',
  mixins: [icon]
};
</script>