<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mower-bag-on" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 2H14V7H12V2M22 6.3L20.6 4.9L17 8.4L18.4 9.8C18.4 9.8 21.9 6.3 22 6.3M10.8 12L11.9 14H17L16.5 13.1C16.2 12.4 15.5 12 14.7 12H10.8M20 15H11.4L4.6 3H1V5H3.4L7.4 12.1L2.3 10.1C2.1 10 1.7 10 1.4 10.2C1.2 10.4 1 10.7 1 11V18C1 18.5 1.5 19 2 19H5.3C5.9 20.2 7.1 21 8.5 21S11.1 20.2 11.7 19H17.2C17.6 20.2 18.7 21 20 21C21.7 21 23 19.7 23 18S21.7 15 20 15M5 17H3V12.5L7.3 14.2C6.1 14.6 5.2 15.7 5 17M8.5 19C7.7 19 7 18.3 7 17.5S7.7 16 8.5 16 10 16.7 10 17.5 9.3 19 8.5 19M20 19C19.5 19 19 18.5 19 18S19.5 17 20 17 21 17.5 21 18 20.5 19 20 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMowerBagOn.svg',
  mixins: [icon]
};
</script>