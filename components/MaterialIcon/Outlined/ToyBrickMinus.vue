<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-toy-brick-minus-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.09 20H3V6H5V5C5 3.9 5.9 3 7 3H9C10.11 3 11 3.9 11 5V6H13V5C13 3.9 13.9 3 15 3H17C18.11 3 19 3.9 19 5V6H21V13.35C20.37 13.13 19.7 13 19 13V8H5V18H13.09C13.04 18.33 13 18.66 13 19S13.04 19.67 13.09 20M23 18H15V20H23V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedToyBrickMinus',
  mixins: [icon]
};
</script>