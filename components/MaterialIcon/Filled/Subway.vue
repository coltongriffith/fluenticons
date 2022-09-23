<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-subway" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.5,15A1,1 0 0,1 9.5,16A1,1 0 0,1 8.5,17A1,1 0 0,1 7.5,16A1,1 0 0,1 8.5,15M7,9H17V14H7V9M15.5,15A1,1 0 0,1 16.5,16A1,1 0 0,1 15.5,17A1,1 0 0,1 14.5,16A1,1 0 0,1 15.5,15M18,15.88V9C18,6.38 15.32,6 12,6C9,6 6,6.37 6,9V15.88A2.62,2.62 0 0,0 8.62,18.5L7.5,19.62V20H9.17L10.67,18.5H13.5L15,20H16.5V19.62L15.37,18.5C16.82,18.5 18,17.33 18,15.88M17.8,2.8C20.47,3.84 22,6.05 22,8.86V22H2V8.86C2,6.05 3.53,3.84 6.2,2.8C8,2.09 10.14,2 12,2C13.86,2 16,2.09 17.8,2.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSubway.svg',
  mixins: [icon]
};
</script>