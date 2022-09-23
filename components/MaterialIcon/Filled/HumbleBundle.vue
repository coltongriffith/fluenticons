<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-humble-bundle" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.91,18.12C14.09,18.12 18.43,2.13 18.43,2.13H15.53C15.53,2.13 14.34,5.89 13.55,10.07H11.05C11.11,9.21 11.15,8.34 11.13,7.5C11,0.59 7,1.87 5.18,3.45C3.47,4.95 2.03,7.8 2,10C2.27,10 3.35,10 3.35,10C3.35,10 4.25,5.88 7.07,5.88C9.89,5.88 5.54,21.87 5.54,21.87H8.45C8.45,21.87 9.95,17.59 10.7,12.81L13.09,12.8C12.95,14.04 12.91,15.4 12.93,16.67C13.04,23.56 17.06,22.08 18.86,20.5C20.67,18.92 22,15.58 22,14H20.61C20.62,14.12 19.73,18.12 16.91,18.12V18.12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHumbleBundle.svg',
  mixins: [icon]
};
</script>