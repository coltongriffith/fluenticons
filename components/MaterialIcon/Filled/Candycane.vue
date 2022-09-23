<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-candycane" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10,10A2,2 0 0,1 8,12A2,2 0 0,1 6,10V8C6,7.37 6.1,6.77 6.27,6.2L10,9.93V10M12,2C12.74,2 13.44,2.13 14.09,2.38L11.97,6C11.14,6 10.44,6.5 10.15,7.25L7.24,4.34C8.34,2.92 10.06,2 12,2M17.76,6.31L14,10.07V8C14,7.62 13.9,7.27 13.72,6.97L15.83,3.38C16.74,4.13 17.42,5.15 17.76,6.31M18,13.09L14,17.09V12.9L18,8.9V13.09M18,20A2,2 0 0,1 16,22A2,2 0 0,1 14,20V19.91L18,15.91V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCandycane.svg',
  mixins: [icon]
};
</script>