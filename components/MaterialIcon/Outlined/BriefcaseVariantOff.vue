<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-briefcase-variant-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 6.8L8.1 4.9L10 3H14L16 5V7H20C21.1 7 22 7.9 22 9V14C22 14.73 21.59 15.37 21 15.72V17.8L17.2 14H20V9H12.2L10.2 7H14V5H10V6.8M22.11 21.46L20.84 22.73L19.1 21C19.07 21 19.03 21 19 21H5C3.89 21 3 20.11 3 19V15.73C2.4 15.38 2 14.75 2 14V9C2 7.9 2.9 7 4 7H5.11L1.11 3L2.39 1.73L22.11 21.46M11 15H13V14.89L11.11 13H11V15M9 14V11H9.11L7.11 9H4V14H9M17.11 19L15 16.89V17H9V16H5V19H17.11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBriefcaseVariantOff',
  mixins: [icon]
};
</script>