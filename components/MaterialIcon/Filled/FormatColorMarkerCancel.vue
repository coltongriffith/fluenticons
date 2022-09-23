<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-format-color-marker-cancel" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.5 8C14 8 12 10 12 12.5S14 17 16.5 17 21 15 21 12.5 19 8 16.5 8M16.5 15.5C14.8 15.5 13.5 14.2 13.5 12.5C13.5 11.9 13.7 11.4 13.9 11L18 15.1C17.6 15.3 17.1 15.5 16.5 15.5M19.1 14L15 9.9C15.4 9.6 15.9 9.5 16.5 9.5C18.2 9.5 19.5 10.8 19.5 12.5C19.5 13.1 19.3 13.6 19.1 14M12.1 7.7L10.6 6.2L13.9 2.9C14.5 2.3 15.4 2.3 16 2.9L18.2 5C18.6 5.4 18.7 5.8 18.6 6.3C18 6.1 17.3 6 16.6 6C14.8 6 13.3 6.7 12.1 7.7M10.5 14.9L9 16.3C8.4 16.9 7.5 16.9 6.9 16.3L6.2 17H2L4.8 14.2C4.2 13.6 4.2 12.7 4.8 12.1L9.5 7.4L11.1 9C10.4 10 10 11.2 10 12.5C10 13.3 10.2 14.1 10.5 14.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFormatColorMarkerCancel.svg',
  mixins: [icon]
};
</script>