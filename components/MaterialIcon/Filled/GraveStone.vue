<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-grave-stone" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10,2H14C17.31,2 19,4.69 19,8V18.66C16.88,17.63 15.07,17 12,17C8.93,17 7.12,17.63 5,18.66V8C5,4.69 6.69,2 10,2M8,8V9.5H16V8H8M9,12V13.5H15V12H9M3,22V21.31C5.66,19.62 13.23,15.84 21,21.25V22H3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGraveStone.svg',
  mixins: [icon]
};
</script>