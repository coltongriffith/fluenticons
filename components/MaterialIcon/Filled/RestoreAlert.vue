<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-restore-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 3C8 3 4 7 4 12H1L4.9 15.9L5 16L9 12H6C6 8.1 9.1 5 13 5S20 8.1 20 12 16.9 19 13 19C11.1 19 9.3 18.2 8.1 16.9L6.7 18.3C8.3 20 10.5 21 13 21C18 21 22 17 22 12S18 3 13 3M12 15H14V17H12V15M12 7H14V13H12V7" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRestoreAlert.svg',
  mixins: [icon]
};
</script>