<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bottle-soda-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.4 9.58C12.9 7.89 13 4 13 4H14V2H10V4H11S11.1 7.89 9.6 9.58A2 2 0 0 0 9 11V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V11A2 2 0 0 0 14.4 9.58M13 20H11V11L11.1 10.91A6.26 6.26 0 0 0 12 9.5A6.26 6.26 0 0 0 12.9 10.91L13 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBottleSoda',
  mixins: [icon]
};
</script>