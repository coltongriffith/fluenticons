<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-midi" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.15 8.26H22V15.74H20.15M13 8.26H18.43C19 8.26 19.3 8.74 19.3 9.3V14.81C19.3 15.5 19 15.74 18.38 15.74H13V11H14.87V13.91H17.5V9.95H13M10.32 8.26H12.14V15.74H10.32M2 8.26H8.55C9.1 8.26 9.41 8.74 9.41 9.3V15.74H7.59V10.15H6.5V15.74H4.87V10.15H3.83V15.74H2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMidi.svg',
  mixins: [icon]
};
</script>