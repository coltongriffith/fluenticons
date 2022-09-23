<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-iv-bag" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 1H10C5 1 5 3 5 3V15C5 15 5 17 10 17V19H11V20C11 21.21 11.8 23 14 23H18V21H14C13.19 21 13 20.45 13 20V19H14V17C19 17 19 15 19 15V3C19 3 19 1 14 1M17 12H14V11H17V12M17 5H14V6H17V8H14V9H17V10H7V3.5C7.3 3.32 8.13 3 10 3H14C15.88 3 16.7 3.32 17 3.5V5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledIvBag.svg',
  mixins: [icon]
};
</script>