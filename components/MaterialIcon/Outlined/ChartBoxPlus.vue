<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chart-box-plus-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 5V7H19V10H17V7H14V5H17V2H19V5H22M19 19H5V5H11V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13H19V19M15 13V17H17V13H15M11 17H13V9H11V17M9 17V11H7V17H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedChartBoxPlus',
  mixins: [icon]
};
</script>