<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-table-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 4H17C18.11 4 19 4.89 19 6V18C19 19.11 18.11 20 17 20H3C1.9 20 1 19.11 1 18V6C1 4.89 1.9 4 3 4M3 8V12H9V8H3M11 8V12H17V8H11M3 14V18H9V14H3M11 14V18H17V14H11M23 7H21V13H23V7M23 15H21V17H23V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTableAlert.svg',
  mixins: [icon]
};
</script>