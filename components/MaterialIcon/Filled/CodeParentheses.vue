<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-code-parentheses" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.62,3C19.13,5.27 20,8.55 20,12C20,15.44 19.13,18.72 17.62,21L16,19.96C17.26,18.07 18,15.13 18,12C18,8.87 17.26,5.92 16,4.03L17.62,3M6.38,3L8,4.04C6.74,5.92 6,8.87 6,12C6,15.13 6.74,18.08 8,19.96L6.38,21C4.87,18.73 4,15.45 4,12C4,8.55 4.87,5.27 6.38,3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCodeParentheses.svg',
  mixins: [icon]
};
</script>