<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-upload-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 22H17C16.5 22 16 21.5 16 21V17C16 16.5 16.5 16 17 16V14.5C17 13.1 18.1 12 19.5 12C20.9 12 22 13.1 22 14.5V16C22.5 16 23 16.5 23 17V21C23 21.5 22.5 22 22 22M14 20H5V18H14V20M21 16V14.5C21 13.7 20.3 13 19.5 13C18.7 13 18 13.7 18 14.5V16H21M15 16H9V10H5L12 3L19 10H15V16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledUploadLock.svg',
  mixins: [icon]
};
</script>