<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-script-text-key-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.8 19C17.4 17.8 16.3 17 15 17C13.3 17 12 18.3 12 20S13.3 23 15 23C16.3 23 17.4 22.2 17.8 21H19V23H21V21H23V19H17.8M15 21.3C14.3 21.3 13.7 20.7 13.7 20S14.3 18.7 15 18.7 16.3 19.3 16.3 20 15.7 21.3 15 21.3M9 10H14V12H9V10M9 6H14V8H9V6M7 5C7 4.4 7.4 4 8 4H16V15.1C16.7 15.3 17.4 15.6 18 16V5C18 4.4 18.4 4 19 4S20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2H8C6.3 2 5 3.3 5 5V16H7V5M10 20C10 19.3 10.1 18.6 10.4 18H2V19C2 20.7 3.3 22 5 22H10.4C10.1 21.4 10 20.7 10 20M9 16H12C12.6 15.6 13.3 15.2 14 15.1V14H9V16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedScriptTextKey',
  mixins: [icon]
};
</script>