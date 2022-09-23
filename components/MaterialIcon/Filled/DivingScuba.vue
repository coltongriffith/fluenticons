<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-diving-scuba" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 13C1 11.9 1.9 11 3 11S5 11.9 5 13 4.1 15 3 15 1 14.1 1 13M8.89 10.11L13.42 8.9L12.64 6L8.11 7.21C7.31 7.42 6.83 8.25 7.05 9.05C7.27 9.85 8.09 10.33 8.89 10.11M20.5 5.9L23 3L22 2L19 5L17 9L7.5 11.87C6.7 12.07 6.13 12.76 6 13.55L5.24 18L2.4 21.8L4 23L7 19L8.14 15.86L14 14L19 10.5L20.5 5.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDivingScuba.svg',
  mixins: [icon]
};
</script>