<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bell-remove-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.12 14.46L18 16.59L15.88 14.46L14.46 15.88L16.59 18L14.46 20.12L15.88 21.54L18 19.41L20.12 21.54L21.54 20.12L19.41 18L21.54 15.88M12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35C12.12 19.36 12 18.68 12 18H7V11A5 5 0 0 1 12 6A5 5 0 0 1 17 11V12.09C17.33 12.04 17.66 12 18 12C18.34 12 18.67 12.03 19 12.09V11C19 7.82 16.88 5.14 14 4.29C14 4.19 14 4.1 14 4C14 2.9 13.11 2 12 2M10 21C10 22.11 10.9 23 12 23C12.66 23 13.28 22.67 13.65 22.13C13.33 21.79 13.05 21.41 12.81 21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBellRemove',
  mixins: [icon]
};
</script>