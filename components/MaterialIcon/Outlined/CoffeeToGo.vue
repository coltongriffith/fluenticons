<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-coffee-to-go-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 3V11A4 4 0 0 0 7 15H11A4 4 0 0 0 15 11V10H17C18.11 10 19 9.11 19 8V5C19 3.9 18.11 3 17 3H3M5 5H13V11A2 2 0 0 1 11 13H7A2 2 0 0 1 5 11V5M15 5H17V8H15V5M16.67 13.83L15.26 15.24L17 17H3V19H17L15.26 20.76L16.67 22.17L20.84 18L16.67 13.83Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedCoffeeToGo',
  mixins: [icon]
};
</script>