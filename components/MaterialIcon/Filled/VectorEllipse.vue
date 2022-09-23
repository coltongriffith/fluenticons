<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-ellipse" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23,9V15H20.35C19.38,17.12 17.43,18.78 15,19.54V22H9V19.54C5.5,18.45 3,15.5 3,12C3,7.58 7.03,4 12,4C15.78,4 19,6.07 20.35,9H23M17,15V9H18.06C16.85,7.21 14.59,6 12,6C8.13,6 5,8.69 5,12C5,14.39 6.64,16.46 9,17.42V16H15V17.42C16.29,16.9 17.35,16.05 18.06,15H17M19,13H21V11H19V13M11,20H13V18H11V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorEllipse.svg',
  mixins: [icon]
};
</script>