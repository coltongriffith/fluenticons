<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-opera" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.04,17.07C8.04,15.9 7.4,14.16 7.35,12.21V11.79C7.4,9.84 8.04,8.1 9.04,6.93C9.86,5.95 10.93,5.37 12.1,5.37C14.72,5.37 16.84,8.34 16.84,12C16.84,15.66 14.72,18.63 12.1,18.63C10.93,18.63 10.33,18.5 9.04,17.07M12.03,3H12A9,9 0 0,0 3,12C3,16.83 6.8,20.77 11.57,21H12C14.3,21 16.4,20.13 18,18.71C19.84,17.06 21,14.67 21,12C21,9.33 19.84,6.94 18,5.29C16.41,3.87 14.32,3 12.03,3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOpera.svg',
  mixins: [icon]
};
</script>