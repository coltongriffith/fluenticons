<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-star-settings-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 22H13V24H11V22M7 24H9V22H7V24M15 24H17V22H15V24M16.54 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97M15.76 17.66L14.77 13.38L18.09 10.5L13.71 10.13L12 6.09L10.29 10.13L5.91 10.5L9.23 13.38L8.24 17.66L12 15.39L15.76 17.66Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedStarSettings',
  mixins: [icon]
};
</script>