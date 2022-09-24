<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hand-extended-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 15V16L14 18.5L7 16.6V18H1V7H9L15.2 9.3C16.2 9.7 17 10.8 17 12H19C20.7 12 22 13.3 22 15M5 16V9H3V16H5M19.9 14.6C19.7 14.2 19.4 14 19 14H13.6C13.1 14 12.5 13.9 12 13.8L9.7 13L10.3 11.1L12.7 11.9C13 11.9 15 12 15 12C15 11.6 14.8 11.3 14.4 11.2L8.6 9H7V14.5L14 16.4L19.9 14.6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedHandExtended',
  mixins: [icon]
};
</script>