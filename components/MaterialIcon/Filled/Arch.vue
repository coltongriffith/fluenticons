<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-arch" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2C11.11,4.18 10.57,5.61 9.58,7.73C10.19,8.37 10.93,9.12 12.14,9.97C10.84,9.43 9.95,8.9 9.29,8.34C8,11 6.03,14.75 2,22C5.17,20.17 7.63,19.04 9.92,18.61C9.82,18.19 9.76,17.73 9.77,17.25V17.15C9.82,15.12 10.88,13.56 12.13,13.67C13.38,13.77 14.35,15.5 14.3,17.54C14.29,17.92 14.25,18.29 14.18,18.63C16.44,19.07 18.87,20.19 22,22C21.38,20.86 20.83,19.84 20.31,18.87C19.5,18.23 18.61,17.39 16.85,16.5C18.06,16.8 18.93,17.16 19.61,17.57C14.26,7.62 13.83,6.3 12,2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledArch.svg',
  mixins: [icon]
};
</script>