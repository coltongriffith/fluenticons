<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-syllabary-hangul" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8 4V6H4V8H6.39C5.55 8.74 5 9.8 5 11C5 13.2 6.8 15 9 15C11.2 15 13 13.2 13 11C13 9.8 12.45 8.74 11.61 8H14V6H10V4M15 4V16H17V11H20V9H17V4M9 9C10.12 9 11 9.88 11 11C11 12.12 10.12 13 9 13C7.88 13 7 12.12 7 11C7 9.88 7.88 9 9 9M7 16V20H17V18H9V16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSyllabaryHangul.svg',
  mixins: [icon]
};
</script>