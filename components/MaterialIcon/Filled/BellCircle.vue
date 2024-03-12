<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bell-circle" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M17,16V15L16,14V11.39C16,10.3 15.73,9.34 15.21,8.53C14.7,7.72 13.96,7.21 13,7V6.5A1,1 0 0,0 12,5.5A1,1 0 0,0 11,6.5V7C10.04,7.21 9.3,7.72 8.79,8.53C8.27,9.34 8,10.3 8,11.39V14L7,15V16H17M13.5,17H10.5A1.5,1.5 0 0,0 12,18.5A1.5,1.5 0 0,0 13.5,17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledBellCircle',
  mixins: [icon]
};
</script>