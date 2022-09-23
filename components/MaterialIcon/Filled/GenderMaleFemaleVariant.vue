<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gender-male-female-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 3A5 5 0 0 0 9 7A5 5 0 0 0 7 11A5 5 0 0 0 11 15.9V18H9V20H11V22H13V20H15V18H13V15.9A5 5 0 0 0 17 11A5 5 0 0 0 15 7A5 5 0 0 0 17 3H15A3 3 0 0 1 12 6A3 3 0 0 1 9 3M12 8A3 3 0 0 1 15 11A3 3 0 0 1 12 14A3 3 0 0 1 9 11A3 3 0 0 1 12 8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGenderMaleFemaleVariant.svg',
  mixins: [icon]
};
</script>