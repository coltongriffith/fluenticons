<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-resistor-nodes" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,11H3.67C4.08,9.83 5.19,9 6.5,9A3,3 0 0,1 9.5,12C9.5,12.65 9.29,13.25 8.94,13.74L10.07,15.35L13.11,4L14.61,6.13L16.7,9.11L17.5,9C18.81,9 19.92,9.83 20.33,11H22V13H20.33C19.92,14.17 18.81,15 17.5,15A3,3 0 0,1 14.5,12C14.5,11.35 14.71,10.75 15.06,10.26L13.93,8.65L10.89,20L7.3,14.89C7.05,14.96 6.78,15 6.5,15C5.19,15 4.08,14.17 3.67,13H2V11M17.5,10.5A1.5,1.5 0 0,0 16,12A1.5,1.5 0 0,0 17.5,13.5A1.5,1.5 0 0,0 19,12A1.5,1.5 0 0,0 17.5,10.5M6.5,10.5A1.5,1.5 0 0,0 5,12A1.5,1.5 0 0,0 6.5,13.5A1.5,1.5 0 0,0 8,12A1.5,1.5 0 0,0 6.5,10.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledResistorNodes.svg',
  mixins: [icon]
};
</script>