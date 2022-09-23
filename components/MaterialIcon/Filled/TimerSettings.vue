<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-timer-settings" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 6.4L20.5 5C20 4.5 19.5 4 19 3.6L17.6 5C16 3.7 14.1 3 12 3C7 3 3 7 3 12S7 21 12 21C17 21 21 17 21 12C21 9.9 20.3 7.9 19 6.4M13 13H11V6H13V13M15 0H9V2H15V0M13 24H11V22H13V24M17 24H15V22H17V24M9 24H7V22H9V24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTimerSettings.svg',
  mixins: [icon]
};
</script>