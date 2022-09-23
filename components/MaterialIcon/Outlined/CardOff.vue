<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.2 6L7.2 4H20C21.11 4 22 4.89 22 6V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V6H9.2M22.11 21.46L20.84 22.73L18.11 20H4C2.9 20 2 19.11 2 18V6C2 5.42 2.25 4.9 2.65 4.54L1.11 3L2.39 1.73L6.66 6L18.65 18H18.66L20.57 19.91L20.56 19.91L22.11 21.46M16.11 18L4.11 6H4V18H16.11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCardOff',
  mixins: [icon]
};
</script>