<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-battery-heart" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.67 4H11V2H5V4H3.33A1.34 1.34 0 0 0 2 5.33V20.67A1.34 1.34 0 0 0 3.33 22H12.67A1.34 1.34 0 0 0 14 20.67V5.33A1.34 1.34 0 0 0 12.67 4M19 16.17L18.42 15.64C16.36 13.77 15 12.54 15 11A2.18 2.18 0 0 1 17.2 8.8A2.4 2.4 0 0 1 19 9.63A2.4 2.4 0 0 1 20.8 8.8A2.18 2.18 0 0 1 23 11C23 12.5 21.64 13.74 19.58 15.61Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledBatteryHeart',
  mixins: [icon]
};
</script>