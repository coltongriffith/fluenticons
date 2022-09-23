<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-table-tennis" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5,14C19.9,14 21,15.1 21,16.5C21,17.9 19.9,19 18.5,19C17.1,19 16,17.9 16,16.5C16,15.1 17.1,14 18.5,14M7,15C7,15 8,16 8,17V20.5C8,21.3 8.7,22 9.5,22C10.3,22 11,21.3 11,20.5V17C11,16 12,15 12,15H7M8,14H11C11,14 16,14 16,9C16,4 12,2 9.5,2C7,2 3,4 3,9C3,14 8,14 8,14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTableTennis.svg',
  mixins: [icon]
};
</script>