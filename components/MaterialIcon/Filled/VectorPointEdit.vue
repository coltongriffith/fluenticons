<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-point-edit" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 9V15H15V9H9M11 11H13V13H11V11M21.2 13C21.1 13 20.9 13.1 20.8 13.2L19.8 14.2L21.9 16.3L22.9 15.3C23.1 15.1 23.1 14.7 22.9 14.5L21.6 13.2C21.4 13.1 21.3 13 21.2 13M19.1 14.8L13 20.9V23H15.1L21.2 16.8L19.1 14.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorPointEdit.svg',
  mixins: [icon]
};
</script>