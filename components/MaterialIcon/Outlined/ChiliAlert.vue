<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chili-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 8.28L12.75 9L11 8L9.25 9L8 8.28C7.4 8.63 7 9.27 7 10V11C7 20 15 22 15 22V10C15 9.27 14.6 8.63 14 8.28M13 18.87C11.23 17.69 9.17 15.44 9 11.43L11 10.3L13 11.45V18.87M9.25 7.5L7.73 6.63C8.26 5.7 9.03 5 9.94 4.69C9.8 4.29 9.44 4 9 4V2C10.54 2 11.79 3.16 11.97 4.65C12.91 4.94 13.72 5.66 14.27 6.63L12.75 7.5L11 6.5L9.25 7.5M19 7V13H17V7H19M17 15H19V17H17V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedChiliAlert',
  mixins: [icon]
};
</script>