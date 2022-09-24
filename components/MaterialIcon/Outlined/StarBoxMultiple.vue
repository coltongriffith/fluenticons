<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-star-box-multiple-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 6V20H18V22H3C2.4 22 2 21.6 2 21V6H4M12.1 10.6L10.2 8.8L12.8 8.4L14 6L15.2 8.4L17.8 8.8L15.9 10.7L16.3 13.3L14 12L11.6 13.2L12.1 10.6M8 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H8C6.9 18 6 17.11 6 16V4C6 2.9 6.9 2 8 2M8 4V16H20V4H8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedStarBoxMultiple',
  mixins: [icon]
};
</script>