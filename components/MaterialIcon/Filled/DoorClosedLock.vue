<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-door-closed-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 11H18V13H16V11M12 3H19A2 2 0 0 1 21 5V19H22V21H2V19H10V5A2 2 0 0 1 12 3M12 5V19H19V5M6.2 5H2.8V4.5A1.7 1.7 0 0 1 6.2 4.5M7 5V4.5A2.5 2.5 0 0 0 2 4.5V5A1 1 0 0 0 1 6V10A1 1 0 0 0 2 11H7A1 1 0 0 0 8 10V6A1 1 0 0 0 7 5" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDoorClosedLock.svg',
  mixins: [icon]
};
</script>