<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-rollupjs" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.46,8.64C19.46,11.11 18.11,13.26 16.12,14.4C16,14.5 15.93,14.66 16,14.81L19.41,21.55C19.5,21.76 19.36,22 19.13,22H6.1L6.17,21.96C6.66,21.68 10.06,14.97 13.38,11.79C16.7,8.61 17.12,9.67 15.29,6.21C15.29,6.21 16.7,8.96 15.5,9.17C14.56,9.34 12.4,7.25 13.2,5.37C14,3.53 17.15,3.88 18.6,5.38C19.15,6.34 19.46,7.45 19.46,8.64M7.16,13.13C5.84,15.56 5,17.33 4.54,18.57V2.31C4.54,2.14 4.68,2 4.85,2H12.92C15.26,2.04 17.31,3.28 18.46,5.15C17.62,4.1 16.3,3.5 15,3.5C12.53,3.5 11.91,4.4 7.16,13.13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRollupjs.svg',
  mixins: [icon]
};
</script>