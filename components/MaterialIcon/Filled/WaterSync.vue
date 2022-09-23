<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-water-sync" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 3.2C12 3.2 6 10 6 14C6 17.3 8.7 20 12 20S18 17.3 18 14C18 10 12 3.2 12 3.2M12 8.5V10C14.2 10 16 11.8 16 14C16 14.8 15.8 15.6 15.3 16.2L14.2 15.1C14.4 14.8 14.5 14.4 14.5 14C14.5 12.6 13.4 11.5 12 11.5V13L9.8 10.8L12 8.5M8.7 11.8L9.8 12.9C9.6 13.2 9.5 13.6 9.5 14C9.5 15.4 10.6 16.5 12 16.5V15L14.2 17.2L12 19.5V18C9.8 18 8 16.2 8 14C8 13.2 8.2 12.4 8.7 11.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWaterSync.svg',
  mixins: [icon]
};
</script>