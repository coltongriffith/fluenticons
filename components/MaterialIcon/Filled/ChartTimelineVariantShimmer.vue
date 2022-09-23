<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chart-timeline-variant-shimmer" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 8C19.5 8 18.7 9.4 19.1 10.5L15.5 14.1C15.2 14 14.8 14 14.5 14.1L11.9 11.5C12.3 10.4 11.5 9 10 9C8.6 9 7.7 10.4 8.1 11.5L3.5 16C2.4 15.7 1 16.5 1 18C1 19.1 1.9 20 3 20C4.4 20 5.3 18.6 4.9 17.5L9.4 12.9C9.7 13 10.1 13 10.4 12.9L13 15.5C12.7 16.5 13.5 18 15 18C16.5 18 17.3 16.6 16.9 15.5L20.5 11.9C21.6 12.2 23 11.4 23 10C23 8.9 22.1 8 21 8M15 9L15.9 6.9L18 6L15.9 5.1L15 3L14.1 5.1L12 6L14.1 6.9L15 9M3.5 11L4 9L6 8.5L4 8L3.5 6L3 8L1 8.5L3 9L3.5 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledChartTimelineVariantShimmer.svg',
  mixins: [icon]
};
</script>