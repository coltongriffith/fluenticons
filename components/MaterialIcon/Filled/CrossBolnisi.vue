<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cross-bolnisi" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22,7L21.5,6.5C19.93,8 18.47,9.4 16.93,10.18C15.5,10.91 14.44,10.91 13,11C13.09,9.56 13.09,8.5 13.82,7.07C14.6,5.53 16,4.07 17.5,2.5L17,2C15.32,3.23 13.64,3.83 12,3.83C10.36,3.83 8.68,3.23 7,2L6.5,2.5C8,4.07 9.4,5.53 10.18,7.07C10.91,8.5 10.91,9.56 11,11C9.56,10.91 8.5,10.91 7.07,10.18C5.53,9.4 4.06,8 2.5,6.5L2,7C3.23,8.68 3.83,10.36 3.83,12C3.83,13.64 3.23,15.32 2,17L2.5,17.5C4.07,16 5.53,14.6 7.07,13.82C8.5,13.09 9.56,13.09 11,13C10.91,14.44 10.91,15.5 10.18,16.93C9.4,18.47 8,19.93 6.5,21.5L7,22C8.68,20.77 10.36,20.17 12,20.17C13.64,20.17 15.32,20.77 17,22L17.5,21.5C16,19.93 14.6,18.47 13.82,16.93C13.09,15.5 13.09,14.44 13,13C14.44,13.09 15.5,13.09 16.93,13.82C18.47,14.6 19.93,16 21.5,17.5L22,17C20.77,15.32 20.17,13.64 20.17,12C20.17,10.36 20.77,8.68 22,7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCrossBolnisi.svg',
  mixins: [icon]
};
</script>