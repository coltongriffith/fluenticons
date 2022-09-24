<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fridge-variant-alert" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 4V19C17 20.11 16.11 21 15 21V22H13V21H10.5V2H15C16.11 2 17 2.9 17 4M5 2H9.5V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2M8 10H5V14H8V10M19 7V13H21V7H19M19 17H21V15H19V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledFridgeVariantAlert',
  mixins: [icon]
};
</script>