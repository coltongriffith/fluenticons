<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-email-off" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L2.6 4.5C2.2 4.9 2 5.4 2 6V18C2 19.1 2.9 20 4 20H18.1L20.8 22.7L22.1 21.5M4 8V6L4.3 6.2L9.6 11.5L4 8M13.4 10.2L7.2 4H20C21.1 4 22 4.9 22 6V18C22 18.2 22 18.5 21.9 18.7L14.6 11.4L20 8V6L13.4 10.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledEmailOff',
  mixins: [icon]
};
</script>