<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-bulleted-off-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.59,20.87L19.17,22.29L16.88,20H4A2,2 0 0,1 2,18V6C2,5.74 2.05,5.5 2.14,5.26L1.17,4.29L2.59,2.87L3.73,4L20.59,20.87V20.87M6.54,4H20A2,2 0 0,1 22,6V18C22,18.41 21.87,18.8 21.66,19.12L20,17.46V6H8.54L6.54,4M4,18H14.88L11.88,15H10V13.12L7.88,11H6V9.12L4,7.12V18M18,15H17.54L15.54,13H18V15M18,11H13.54L11.54,9H18V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedCardBulletedOff',
  mixins: [icon]
};
</script>