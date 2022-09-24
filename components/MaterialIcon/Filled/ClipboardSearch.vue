<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clipboard-search" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.9 10.9C14.41 8.4 18.45 8.37 21 10.82V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.06C12.65 20.74 12.26 20.45 11.9 20.1C9.37 17.56 9.37 13.44 11.9 10.9M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11S12 13 12 15.5 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9M16.5 18C15.12 18 14 16.88 14 15.5S15.12 13 16.5 13 19 14.12 19 15.5 17.88 18 16.5 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledClipboardSearch',
  mixins: [icon]
};
</script>