<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cloud-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 20H6C2.7 20 0 17.3 0 14C0 10.9 2.3 8.4 5.3 8C6.6 5.6 9.1 4 12 4C15.6 4 18.7 6.6 19.4 10C22 10.2 24 12.3 24 15C24 17.7 21.7 20 19 20M11 15V17H13V15H11M11 13H13V7H11V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCloudAlert.svg',
  mixins: [icon]
};
</script>