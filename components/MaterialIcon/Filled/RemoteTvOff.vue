<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-remote-tv-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,5.27L3.28,4L20,20.72L18.73,22L17,20.25C16.86,21.24 16,22 15,22H9A2,2 0 0,1 7,20V10.27L2,5.27M9,2H11V4H13V2H15A2,2 0 0,1 17,4V15.18L13,11.18V10H15V8H13V6H11V8H9.82L7,5.18V4A2,2 0 0,1 9,2M9,20H11V18H9V20M13,20H15V18.27L14.73,18H13V20M9,14V16H11V14.27L10.73,14H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRemoteTvOff.svg',
  mixins: [icon]
};
</script>