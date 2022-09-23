<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-skate" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.95 17C20.7 18.69 19.26 20 17.5 20H16V18H19C18.93 16.72 19.26 14.04 18.53 12.95C17.56 10.9 14.83 10.56 12.93 10.05C12 10 11 9 10.84 8H8C7.72 8 7.5 7.78 7.5 7.5C7.5 7.22 7.72 7 8 7H10.5V6H8C7.72 6 7.5 5.78 7.5 5.5C7.5 5.22 7.72 5 8 5H10.5V2H2.03V18H5V20H1V22H17.5C20.36 22 22.72 19.8 23 17H20.95M14 20H7V18H14V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSkate.svg',
  mixins: [icon]
};
</script>