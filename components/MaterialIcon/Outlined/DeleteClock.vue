<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-delete-clock-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13M23 16C23 19.87 19.87 23 16 23C14.09 23 12.36 22.24 11.1 21H8C6.9 21 6 20.1 6 19V7H18V9.29C20.89 10.15 23 12.83 23 16M9 16C9 12.13 12.13 9 16 9H8V19H9.67C9.24 18.09 9 17.07 9 16M16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedDeleteClock',
  mixins: [icon]
};
</script>