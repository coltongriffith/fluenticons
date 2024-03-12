<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-message-lock-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 3V2.5C23 1.1 21.9 0 20.5 0S18 1.1 18 2.5V3C17.5 3 17 3.5 17 4V8C17 8.5 17.5 9 18 9H23C23.5 9 24 8.5 24 8V4C24 3.5 23.5 3 23 3M22 3H19V2.5C19 1.7 19.7 1 20.5 1S22 1.7 22 2.5V3M22 11V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H15V4H4V17.2L5.2 16H20V11H22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedMessageLock',
  mixins: [icon]
};
</script>