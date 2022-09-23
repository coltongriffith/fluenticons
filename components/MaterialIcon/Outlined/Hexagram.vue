<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hexagram-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,7L13.3,9.8L16.5,9.4L14.5,12L16.4,14.5L13.2,14.1L12,17L10.7,14.2L7.5,14.6L9.5,12L7.6,9.5L10.8,9.9L12,7M12,2L9.5,7.7L3.3,7L7,12L3.4,17L9.6,16.3L12,22L14.5,16.3L20.7,16.9L17,12L20.6,7L14.4,7.7L12,2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedHexagram',
  mixins: [icon]
};
</script>