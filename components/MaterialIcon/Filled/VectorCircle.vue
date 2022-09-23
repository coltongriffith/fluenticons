<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-circle" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9,2V4.06C6.72,4.92 4.92,6.72 4.05,9H2V15H4.06C4.92,17.28 6.72,19.09 9,19.95V22H15V19.94C17.28,19.08 19.09,17.28 19.95,15H22V9H19.94C19.08,6.72 17.28,4.92 15,4.05V2M11,4H13V6H11M9,6.25V8H15V6.25C16.18,6.86 17.14,7.82 17.75,9H16V15H17.75C17.14,16.18 16.18,17.14 15,17.75V16H9V17.75C7.82,17.14 6.86,16.18 6.25,15H8V9H6.25C6.86,7.82 7.82,6.86 9,6.25M4,11H6V13H4M18,11H20V13H18M11,18H13V20H11" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorCircle.svg',
  mixins: [icon]
};
</script>