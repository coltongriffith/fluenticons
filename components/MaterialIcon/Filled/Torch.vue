<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-torch" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.6 9.6C9 10.2 9.5 10.7 10.2 11H14.2C14.5 10.9 14.7 10.7 14.9 10.5C15.9 9.5 16.3 8 15.8 6.7L15.7 6.5C15.6 6.2 15.4 6 15.2 5.8C15.1 5.6 14.9 5.5 14.8 5.3C14.4 5 14 4.7 13.6 4.3C12.7 3.4 12.6 2 13.1 1C12.6 1.1 12.1 1.4 11.7 1.8C10.2 3 9.6 5.1 10.3 7V7.2C10.3 7.3 10.2 7.4 10.1 7.5C10 7.6 9.8 7.5 9.7 7.4L9.6 7.3C9 6.5 8.9 5.3 9.3 4.3C8.4 5.1 7.9 6.4 8 7.7C8 8 8.1 8.3 8.2 8.6C8.2 8.9 8.4 9.3 8.6 9.6M12.3 8.1C12.4 7.6 12.2 7.2 12.1 6.8C12 6.4 12 6 12.2 5.6L12.5 6.2C12.9 6.8 13.6 7 13.8 7.8V8.1C13.8 8.6 13.6 9.1 13.3 9.4C13.1 9.5 12.9 9.7 12.7 9.7C12.1 9.9 11.4 9.6 11 9.2C11.8 9.2 12.2 8.6 12.3 8.1M15 12V14H14L13 22H11L10 14H9V12H15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTorch.svg',
  mixins: [icon]
};
</script>