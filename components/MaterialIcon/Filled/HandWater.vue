<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hand-water" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.42 22.5H5.33C3.5 22.5 2 21 2 19.17V13.08C2 12.18 2.36 11.33 3 10.71L8.63 5.17C8.63 5.17 9.66 6.22 9.67 6.25C9.83 6.43 9.92 6.66 9.92 6.91C9.92 7.09 9.87 7.26 9.78 7.41C9.77 7.44 8 10 8 10H18.67C19.36 10 19.92 10.56 19.92 11.25C19.92 11.94 19.36 12.5 18.67 12.5H12.83V13.33H20.75C21.44 13.33 22 13.89 22 14.58C22 15.28 21.44 15.83 20.75 15.83H12.83V16.67H19.92C20.61 16.67 21.17 17.22 21.17 17.92C21.17 18.61 20.61 19.17 19.92 19.17H12.83V20H17.42C18.11 20 18.67 20.56 18.67 21.25C18.67 21.94 18.11 22.5 17.42 22.5M13.5 4.8C13.5 4.8 12 6.46 12 7.5C12 9.5 15 9.5 15 7.5C15 6.46 13.5 4.8 13.5 4.8M18.5 1C18.5 1 16 3.76 16 5.5C16 8.83 21 8.83 21 5.5C21 3.76 18.5 1 18.5 1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHandWater.svg',
  mixins: [icon]
};
</script>