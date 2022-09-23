<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-math-integral" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.5 19.1C11.3 20.2 10.9 21 10.2 21.5C9.5 22 8.6 22.1 7.5 21.9C7.1 21.8 6.3 21.7 6 21.5L6.5 20C6.8 20.1 7.4 20.3 7.7 20.3C8.8 20.5 9.4 20 9.6 18.8L12 5.2C12.2 4 12.7 3.2 13.4 2.6C14.1 2.1 15.1 1.9 16.2 2.1C16.6 2.2 17.4 2.3 18 2.6L17.5 4C17.3 3.9 16.6 3.8 16.3 3.7C15 3.5 14.3 4.1 14 5.6L11.5 19.1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMathIntegral.svg',
  mixins: [icon]
};
</script>