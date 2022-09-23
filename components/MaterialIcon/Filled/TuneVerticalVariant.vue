<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tune-vertical-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8 12.14V2H6V12.14C4.28 12.59 3 14.14 3 16S4.28 19.41 6 19.86V22H8V19.86C9.72 19.41 11 17.86 11 16S9.72 12.59 8 12.14M7 14C8.1 14 9 14.9 9 16S8.1 18 7 18C5.9 18 5 17.1 5 16S5.9 14 7 14M18 2H16V4.14C14.28 4.59 13 6.14 13 8S14.28 11.41 16 11.86V22H18V11.86C19.72 11.41 21 9.86 21 8S19.72 4.59 18 4.14V2M17 6C18.1 6 19 6.9 19 8S18.1 10 17 10C15.9 10 15 9.1 15 8S15.9 6 17 6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTuneVerticalVariant.svg',
  mixins: [icon]
};
</script>