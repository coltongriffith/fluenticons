<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-image-broken" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,3A2,2 0 0,1 21,5V11H19V13H19L17,13V15H15V17H13V19H11V21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19M21,15V19A2,2 0 0,1 19,21H19L15,21V19H17V17H19V15H21M19,8.5A0.5,0.5 0 0,0 18.5,8H5.5A0.5,0.5 0 0,0 5,8.5V15.5A0.5,0.5 0 0,0 5.5,16H11V15H13V13H15V11H17V9H19V8.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledImageBroken.svg',
  mixins: [icon]
};
</script>