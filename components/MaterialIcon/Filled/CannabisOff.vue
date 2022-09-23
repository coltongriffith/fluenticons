<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cannabis-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.62 13.42L14.5 11.32C16.84 8.94 19.83 8.11 19.83 8.11C18.87 10.6 17.73 12.27 16.62 13.42M12 2C12 2 10.86 4.3 10.41 7.21L13.72 10.5C13.92 8.45 13.61 5.63 12 2M20.84 22.73L22.11 21.46L2.39 1.73L1.11 3L8.62 10.5C6.5 8.75 4.17 8.11 4.17 8.11C5.7 12.08 7.69 14 9.28 14.97C6.47 14.59 4 16 4 16C6.68 17.19 8.64 17.23 9.94 16.95C8.53 18.1 8.03 19.81 8.03 19.81C10 19.09 11 18.13 11.5 17.35V22H12.5V17.35C13 18.13 14 19.09 15.97 19.81C15.97 19.81 15.47 18.1 14.06 16.95C14.39 17 14.77 17.07 15.2 17.09L20.84 22.73Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCannabisOff.svg',
  mixins: [icon]
};
</script>