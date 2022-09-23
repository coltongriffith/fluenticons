<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-code-parentheses-box" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 17.3L8.4 18C6.9 16.5 6 14.3 6 12S6.9 7.5 8.4 6L10 6.7C8.7 7.9 8 9.9 8 12S8.7 16.1 10 17.3M15.6 18L14 17.3C15.3 16 16 14.1 16 12S15.3 7.9 14 6.7L15.6 6C17.1 7.5 18 9.7 18 12C18 14.3 17.1 16.5 15.6 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCodeParenthesesBox.svg',
  mixins: [icon]
};
</script>