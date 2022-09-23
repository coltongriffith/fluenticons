<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-coffee-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 3.27L4 5.27V13C4 15.21 5.79 17 8 17H14C14.5 17 15 16.89 15.44 16.71L17.73 19H2V21H19.73L20.72 22L22 20.72L3.27 2L2 3.27M8 15C6.9 15 6 14.1 6 13V7.27L13.73 15H8M20 3H6.81L8.81 5H16V12.19L17.85 14.04C17.94 13.7 18 13.36 18 13V10H20C21.1 10 22 9.1 22 8V5C22 3.9 21.1 3 20 3M20 8H18V5H20V8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCoffeeOff',
  mixins: [icon]
};
</script>