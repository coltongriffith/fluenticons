<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-network-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1.04,5.27L5,9.23V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H17.77L19.77,24L21.04,22.72L2.32,4L1.04,5.27M7,11.23L10.77,15H7V11.23M15,20A1,1 0 0,0 14,19H13V17.23L15.77,20H15M22,20V21.14L20.86,20H22M7,6.14L5.14,4.28C5.43,3.53 6.16,3 7,3H17A2,2 0 0,1 19,5V15C19,15.85 18.47,16.57 17.72,16.86L15.86,15H17V5H7V6.14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedNetworkOff',
  mixins: [icon]
};
</script>