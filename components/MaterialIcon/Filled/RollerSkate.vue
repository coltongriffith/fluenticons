<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-roller-skate" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6.5 18C5.1 18 4 19.12 4 20.5S5.1 23 6.5 23 9 21.88 9 20.5 7.86 18 6.5 18M16.5 18C15.1 18 14 19.12 14 20.5S15.1 23 16.5 23 19 21.88 19 20.5 17.86 18 16.5 18M20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRollerSkate.svg',
  mixins: [icon]
};
</script>