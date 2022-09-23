<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fuel-cell" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 3V5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19V20C4 21.1 4.9 22 6 22H7C8.1 22 9 21.1 9 20V19H15V20C15 21.1 15.9 22 17 22H18C19.1 22 20 21.1 20 20V19C21.1 19 22 18.1 22 17H11V5H8V3H6M16 3V5H13V7H22C22 5.9 21.1 5 20 5H18V3H16M7 7V11H9L6 17V13H4L7 7M13 9V11H22V9H13M13 13V15H22V13H13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFuelCell.svg',
  mixins: [icon]
};
</script>