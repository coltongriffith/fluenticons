<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-soy-sauce-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L8.6 10.5C7.5 12.6 6 15.3 6 17.6V19.6C6 21 8.7 21.9 12 21.9C15.1 21.9 17.7 21.1 18 19.9L20.9 22.8L22.1 21.5M12 15C10.9 15 10 14.1 10 13C10 12.7 10.1 12.4 10.2 12.1L12.9 14.8C12.6 14.9 12.3 15 12 15M8.3 3.5H7.5V2H16.5V3.5H15.7L14.8 6H14.2C14.1 6.3 13.9 6.8 13.9 7.5C13.9 8.4 15.9 11 17.1 13.9L10.1 6.9C10 6.5 9.9 6.2 9.8 6H9.2L8.3 3.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSoySauceOff.svg',
  mixins: [icon]
};
</script>