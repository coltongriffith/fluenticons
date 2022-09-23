<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cloud-print" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2C9.11,2 6.6,3.64 5.35,6.04C2.34,6.36 0,8.91 0,12A6,6 0 0,0 6,18V22H18V18H19A5,5 0 0,0 24,13C24,10.36 21.95,8.22 19.35,8.04C18.67,4.59 15.64,2 12,2M8,13H16V20H8V13M9,14V15H15V14H9M9,16V17H15V16H9M9,18V19H15V18H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCloudPrint.svg',
  mixins: [icon]
};
</script>