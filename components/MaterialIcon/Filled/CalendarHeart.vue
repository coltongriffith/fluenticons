<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-heart" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 19V8H5V19H19M16 1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1M12 17.17L11.42 16.64C9.36 14.77 8 13.54 8 12.03C8 10.8 8.97 9.83 10.2 9.83C10.9 9.83 11.56 10.15 12 10.66C12.44 10.15 13.1 9.83 13.8 9.83C15.03 9.83 16 10.8 16 12.03C16 13.54 14.64 14.77 12.58 16.64L12 17.17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCalendarHeart.svg',
  mixins: [icon]
};
</script>