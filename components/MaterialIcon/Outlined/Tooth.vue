<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tooth-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7,2C4,2 2,5 2,8C2,10.11 3,13 4,14C5,15 6,22 8,22C12.54,22 10,15 12,15C14,15 11.46,22 16,22C18,22 19,15 20,14C21,13 22,10.11 22,8C22,5 20,2 17,2C14,2 14,3 12,3C10,3 10,2 7,2M7,4C9,4 10,5 12,5C14,5 15,4 17,4C18.67,4 20,6 20,8C20,9.75 19.14,12.11 18.19,13.06C17.33,13.92 16.06,19.94 15.5,19.94C15.29,19.94 15,18.88 15,17.59C15,15.55 14.43,13 12,13C9.57,13 9,15.55 9,17.59C9,18.88 8.71,19.94 8.5,19.94C7.94,19.94 6.67,13.92 5.81,13.06C4.86,12.11 4,9.75 4,8C4,6 5.33,4 7,4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTooth',
  mixins: [icon]
};
</script>