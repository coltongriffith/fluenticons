<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eye-settings-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C16.86,4.5 21.22,7.5 23,12C20.61,18.08 13.75,21.06 7.67,18.67C4.62,17.47 2.2,15.06 1,12C2.78,7.5 7.14,4.5 12,4.5M3.18,12C5.56,16.87 11.45,18.89 16.32,16.5C18.28,15.54 19.86,13.96 20.82,12C18.44,7.13 12.55,5.11 7.68,7.5C5.72,8.46 4.14,10.04 3.18,12M9,22H7V24H9V22M13,22H11V24H13V22M17,22H15V24H17V22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedEyeSettings',
  mixins: [icon]
};
</script>