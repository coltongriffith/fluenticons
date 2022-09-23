<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-saxophone" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,2A1,1 0 0,0 3,3A1,1 0 0,0 4,4A3,3 0 0,1 7,7V8.66L7,15.5C7,19.1 9.9,22 13.5,22C17.1,22 20,19.1 20,15.5V13A1,1 0 0,0 21,12A1,1 0 0,0 20,11H14A1,1 0 0,0 13,12A1,1 0 0,0 14,13V15A1,1 0 0,1 13,16A1,1 0 0,1 12,15V11A1,1 0 0,0 13,10A1,1 0 0,0 12,9V8A1,1 0 0,0 13,7A1,1 0 0,0 12,6V5.5A3.5,3.5 0 0,0 8.5,2H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSaxophone.svg',
  mixins: [icon]
};
</script>