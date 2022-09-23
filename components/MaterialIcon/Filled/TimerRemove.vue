<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-timer-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 3H9V1H15V3M13 19C13 20.03 13.26 21 13.71 21.83C13.16 21.94 12.59 22 12 22C7.03 22 3 17.97 3 13S7.03 4 12 4C14.12 4 16.07 4.74 17.62 6L19.04 4.56C19.55 5 20 5.46 20.45 5.97L19.03 7.39C20.26 8.93 21 10.88 21 13C21 13.12 21 13.23 21 13.35C20.36 13.13 19.7 13 19 13C15.69 13 13 15.69 13 19M13 7H11V14H13V7M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTimerRemove.svg',
  mixins: [icon]
};
</script>