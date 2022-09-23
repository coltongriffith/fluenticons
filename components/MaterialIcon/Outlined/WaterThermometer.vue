<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-water-thermometer-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6M8 3.54L7.25 4.38C7.25 4.38 5.97 5.83 4.68 7.71S2 11.84 2 14C2 17.31 4.69 20 8 20S14 17.31 14 14C14 11.84 12.61 9.59 11.32 7.71S8.75 4.38 8.75 4.38L8 3.54M8 6.67C8.44 7.19 8.84 7.62 9.68 8.84C10.89 10.6 12 12.84 12 14C12 16.22 10.22 18 8 18S4 16.22 4 14C4 12.84 5.11 10.6 6.32 8.84C7.16 7.62 7.56 7.19 8 6.67Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedWaterThermometer',
  mixins: [icon]
};
</script>