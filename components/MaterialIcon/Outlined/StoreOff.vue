<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-store-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.39 1.73L1.11 3L5.11 7H4L3 12V14H4V20H14V15.89L20.84 22.73L22.11 21.46L2.39 1.73M5.64 9H7.11L10.11 12H5.04L5.64 9M12 18H6V14H12V18M18 14.8V14H17.2L15.2 12H18.96L18.36 9H12.2L10.2 7H20L21 12V14H20V16.8L18 14.8M9.2 6L7.2 4H20V6H9.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedStoreOff',
  mixins: [icon]
};
</script>