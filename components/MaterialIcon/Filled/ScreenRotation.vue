<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-screen-rotation" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.5,21.5C4.25,19.94 1.91,16.76 1.55,13H0.05C0.56,19.16 5.71,24 12,24L12.66,23.97L8.85,20.16M14.83,21.19L2.81,9.17L9.17,2.81L21.19,14.83M10.23,1.75C9.64,1.16 8.69,1.16 8.11,1.75L1.75,8.11C1.16,8.7 1.16,9.65 1.75,10.23L13.77,22.25C14.36,22.84 15.31,22.84 15.89,22.25L22.25,15.89C22.84,15.3 22.84,14.35 22.25,13.77L10.23,1.75M16.5,2.5C19.75,4.07 22.09,7.24 22.45,11H23.95C23.44,4.84 18.29,0 12,0L11.34,0.03L15.15,3.84L16.5,2.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScreenRotation.svg',
  mixins: [icon]
};
</script>