<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-temple-hindu-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 11V13H18L15 3V1H13V3H11V1H9V3.1L6 13H4V11H2V22H11V17H13V22H22V11H20M15.3 11H8.7L9.3 9H14.7L15.3 11M14.1 7H9.9L10.5 5H13.5L14.1 7M20 20H15V15H9V20H4V15H7.5L8.1 13H15.9L16.5 15H20V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTempleHindu',
  mixins: [icon]
};
</script>