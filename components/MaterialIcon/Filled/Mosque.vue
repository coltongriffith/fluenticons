<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mosque" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 8H17C17.3 8 17.6 8.1 17.8 8.1C17.9 7.8 18 7.4 18 7.1C18 5.8 17.4 4.6 16.3 3.9L12 1L7.7 3.8C6.7 4.6 6 5.8 6 7.1C6 7.5 6.1 7.8 6.2 8.1C6.4 8.1 6.7 8 7 8M24 7C24 5.9 22 4 22 4S20 5.9 20 7C20 7.7 20.4 8.4 21 8.7V13H19V11C19 9.9 18.1 9 17 9H7C5.9 9 5 9.9 5 11V13H3V8.7C3.6 8.4 4 7.7 4 7C4 5.9 2 4 2 4S0 5.9 0 7C0 7.7 .4 8.4 1 8.7V21H10V17C10 15.9 10.9 15 12 15S14 15.9 14 17V21H23V8.7C23.6 8.4 24 7.7 24 7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMosque.svg',
  mixins: [icon]
};
</script>