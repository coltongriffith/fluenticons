<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mirror-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28M8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61M14.17 3L18 6.83V17.17L14.17 21H9.83L6 17.17V6.83L9.83 3H14.17M15 1H9L4 6V18L9 23H15L20 18V6L15 1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMirrorVariant.svg',
  mixins: [icon]
};
</script>