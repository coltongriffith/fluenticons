<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clock-edit" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9M11 21.9C5.9 21.4 2 17.1 2 12C2 6.5 6.5 2 12 2C17.3 2 21.6 6.1 22 11.3C21.7 11.2 21.4 11.1 21 11.1C20.2 11.1 19.6 11.5 19.2 11.9L16.5 14.6L12.5 12.2V7H11V13L15.4 15.7L11 20.1V21.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledClockEdit',
  mixins: [icon]
};
</script>