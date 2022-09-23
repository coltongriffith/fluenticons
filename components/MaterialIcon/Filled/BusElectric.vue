<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bus-electric" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 8H6V4H18M16.5 14C15.7 14 15 13.3 15 12.5C15 11.7 15.7 11 16.5 11C17.3 11 18 11.7 18 12.5C18 13.3 17.3 14 16.5 14M7.5 14C6.7 14 6 13.3 6 12.5C6 11.7 6.7 11 7.5 11S9 11.7 9 12.5C9 13.3 8.3 14 7.5 14M4 13C4 13.9 4.4 14.7 5 15.2V17C5 17.6 5.4 18 6 18H7C7.6 18 8 17.6 8 17V16H16V17C16 17.6 16.4 18 17 18H18C18.6 18 19 17.6 19 17V15.2C19.6 14.7 20 13.9 20 13V4C20 .5 16.4 0 12 0S4 .5 4 4V13M7 21H11V19L17 22H13V24L7 21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBusElectric.svg',
  mixins: [icon]
};
</script>