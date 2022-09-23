<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-kettle-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L4.7 6.6C4.3 7.3 4 8.1 4 9C4 10.2 4.5 11.3 5.4 12.3C4.5 13.5 4 15 4 16.5V20C4 21.1 4.9 22 6 22H19C19.3 22 19.6 21.9 19.9 21.8L20.8 22.7L22.1 21.5M8.2 10.1L7.6 10.4C7.2 10 7 9.5 7 9V8.9L8.2 10.1M6 20V16.5C6 14.7 7.6 12.6 9.7 11.6L10.9 12.8C9.1 13.4 8 14.8 8 17V18H10V17C10 16.2 10 14.5 11.4 13.3L18.1 20H6M16.9 10.1L19 8L22 11L20 13C20.7 14.1 21 15.3 21 16.5V17.8L18.9 15.7C18.5 13.9 16.8 12.1 14.6 11.4L12.2 9C13.8 8.9 15.4 9.3 16.9 10.1M9.5 6.3L7.4 4.2C8.8 3.5 10.6 3 12.5 3C14.6 3 16.6 3.5 18.3 4.7L16.3 6.7C15.3 6.1 13.9 5.7 12.5 5.7C11.4 5.7 10.3 5.9 9.5 6.3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedKettleOff',
  mixins: [icon]
};
</script>