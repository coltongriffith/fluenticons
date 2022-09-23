<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-om" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15,2L13.5,3.5L15,5L16.5,3.5L15,2M11,3C10,9 17,10 20,6L18,4.5C17,6 13,8 11,3M9,7C7,7 4.5,8.5 4.5,8.5L6,11C7,10 9,9.5 10,10C12,11 9,13 7,12V15.5C10,14 12,16 11,17.5C8,22 3,16 3,13C1,19 6,22 9,22C12,22 14,20 12.5,15H14C12.5,19.5 18,24 21,18C22,16 22,9.5 17,9.5C13,9.5 14,15 10.5,13.5C14,10 12,7 9,7M19,12C22,15 15,21 15,15C15,13 17,10.5 19,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOm.svg',
  mixins: [icon]
};
</script>