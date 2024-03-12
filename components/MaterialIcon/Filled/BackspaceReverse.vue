<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-backspace-reverse" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,21H17C17.7,21 18.2,20.6 18.6,20.1L24,12L18.6,3.9C18.2,3.4 17.7,3 17,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21M5,8.4L6.4,7L10,10.6L13.6,7L15,8.4L11.4,12L15,15.6L13.6,17L10,13.4L6.4,17L5,15.6L8.6,12" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledBackspaceReverse',
  mixins: [icon]
};
</script>