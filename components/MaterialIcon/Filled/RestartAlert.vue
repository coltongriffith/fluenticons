<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-restart-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 4.03V.633L5 5.63L10 10.63V6.03C11.5 6.03 13.11 6.63 14.21 7.73C16.5 10.13 16.5 13.93 14.21 16.23C12.91 17.53 11.11 18.13 9.4 17.93L8.9 19.93C11.31 20.23 13.81 19.53 15.61 17.63C18.7 14.53 18.7 9.43 15.61 6.33C14.11 4.83 12.11 4.03 10 4.03M4.31 17.63C5.11 18.43 6 19.03 7 19.43L7.61 17.43C6.91 17.13 6.31 16.73 5.81 16.23C3.91 14.43 3.5 11.63 4.61 9.43L3.11 7.93C1.31 11.03 1.71 15.03 4.31 17.63M20 13H22V7H20V13M20 17H22V15H20V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRestartAlert.svg',
  mixins: [icon]
};
</script>