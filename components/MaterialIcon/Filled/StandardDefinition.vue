<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-standard-definition" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16M7,7H11V9H7V11H9A2,2 0 0,1 11,13V15A2,2 0 0,1 9,17H5V15H9V13H7A2,2 0 0,1 5,11V9A2,2 0 0,1 7,7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStandardDefinition.svg',
  mixins: [icon]
};
</script>