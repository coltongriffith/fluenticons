<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-kettle-pour-over" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 4C9.4 4 9 4.4 9 5V6H14V5C14 4.4 13.6 4 13 4H10M3 7L4.1 14.1C4.2 14.8 4.5 15.5 5.1 16.1C5.5 16.6 6.2 16.9 7 17C7 17.6 7.4 18 8 18H16C16.6 18 17 17.6 17 17L15 11H17L20.3 16L22 15L18.7 10L20 9.2L19 7.5L16.4 9H15V7H8V11L7.2 16C6.5 15.9 6.1 15.7 5.8 15.4C5.4 15 5.2 14.5 5.1 13.9L4 7H3M4 19V21H20V19H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKettlePourOver.svg',
  mixins: [icon]
};
</script>