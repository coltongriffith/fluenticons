<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-newspaper-plus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M20,11V8H4V11H20M13,13V14.68C12.37,15.63 12,16.77 12,18C12,19.09 12.29,20.12 12.8,21H4A2,2 0 0,1 2,19V3L3.67,4.67L5.33,3L7,4.67L8.67,3L10.33,4.67L12,3L13.67,4.67L15.33,3L17,4.67L18.67,3L20.33,4.67L22,3V13.5C20.93,12.58 19.53,12 18,12C16.77,12 15.63,12.37 14.68,13H13M11,19V13H4V19H11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledNewspaperPlus.svg',
  mixins: [icon]
};
</script>