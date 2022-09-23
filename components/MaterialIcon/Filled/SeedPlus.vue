<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-seed-plus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 17H14V19H17V22H19V19H22V17H19V14H17V17M12 18C12 14.69 14.69 12 18 12C18.77 12 19.5 12.15 20.17 12.41C21.63 7.9 20.7 3.3 20.7 3.3S19.3 3 17.2 3C11.7 3 1.6 5.1 3.2 20.8C4.3 20.9 5.4 21 6.4 21C8.76 21 10.74 20.69 12.41 20.15C12.15 19.5 12 18.76 12 18M7 17C7 17 7 7 17 7C17 7 11 9 7 17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSeedPlus.svg',
  mixins: [icon]
};
</script>