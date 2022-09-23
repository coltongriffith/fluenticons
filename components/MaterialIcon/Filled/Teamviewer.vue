<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-teamviewer" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.04 9.2L9.3 11H14.75L14 9.2L19.55 12L14 14.8L14.75 13H9.3L10.04 14.8L4.5 12L10.04 9.2M20.83 22H3.17C2.53 22 2 21.5 2 20.83V3.17C2 2.53 2.53 2 3.17 2H20.83C21.5 2 22 2.53 22 3.17V20.83C22 21.47 21.5 22 20.83 22M11.93 3.76C7.41 3.82 3.78 7.5 3.76 12C3.72 16.5 7.35 20.2 11.86 20.24H12C16.53 20.18 20.18 16.53 20.24 12C20.31 7.5 16.74 3.83 12.26 3.76C12.15 3.75 12.04 3.76 11.93 3.76Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTeamviewer.svg',
  mixins: [icon]
};
</script>