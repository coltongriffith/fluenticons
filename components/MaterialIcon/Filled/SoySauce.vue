<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-soy-sauce" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.9,7.5C13.9,6.8 14.1,6.3 14.2,6H14.8L15.7,3.5H16.5V2H7.5V3.5H8.3L9.2,6H9.8C10,6.3 10.1,6.8 10.1,7.5C10.1,8.8 6,13.7 6,17.6V19.6C6,21 8.7,21.9 12,21.9C15.3,21.9 18,21 18,19.6V17.6C18,13.7 13.9,8.8 13.9,7.5M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSoySauce.svg',
  mixins: [icon]
};
</script>