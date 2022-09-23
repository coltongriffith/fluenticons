<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-view-comfy-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 5V19H22V5H3M20 9H17.75V7H20V9M9.25 11H11.5V13H9.25V11M7.25 13H5V11H7.25V13M11.5 9H9.25V7H11.5V9M13.5 7H15.75V9H13.5V7M11.5 15V17H9.25V15H11.5M13.5 15H15.75V17H13.5V15M13.5 13V11H15.75V13H13.5M17.75 11H20V13H17.75V11M7.25 7V9H5V7H7.25M5 15H7.25V17H5V15M17.75 17V15H20V17H17.75Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedViewComfy',
  mixins: [icon]
};
</script>