<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-office-building-minus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.4 21C13.2 20.4 13 19.7 13 19C13 17.5 13.6 16.1 14.5 15H13V13H15V14.5C15.6 14 16.3 13.6 17 13.3V3H3V21H9V17.5H11V21H13.4M13 5H15V7H13V5M13 9H15V11H13V9M7 19H5V17H7V19M7 15H5V13H7V15M7 11H5V9H7V11M7 7H5V5H7V7M9 5H11V7H9V5M9 9H11V11H9V9M9 15V13H11V15H9M23 18V20H15V18H23Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOfficeBuildingMinus.svg',
  mixins: [icon]
};
</script>