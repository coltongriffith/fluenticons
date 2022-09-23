<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-xmpp" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,15.4C9.75,13.09 8,9.54 8,6C2,4 8,6 2,4C2,9.65 6.33,14.11 10.55,16.66C9.38,17.5 8.15,18 7,18C7,19 7,18 7,19C8.2,19 10.03,18.46 12,17.46C13.97,18.46 15.8,19 17,19C17,18 17,19 17,18C15.85,18 14.62,17.5 13.45,16.66C17.66,14.11 22,9.65 22,4C16,6 22,4 16,6C16,9.54 14.25,13.09 12,15.4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledXmpp.svg',
  mixins: [icon]
};
</script>