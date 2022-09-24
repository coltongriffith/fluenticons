<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-keyboard-off-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1,4.27L2.47,5.74C2.18,6.08 2,6.5 2,7V17A2,2 0 0,0 4,19H15.73L18.73,22L20,20.72L2.28,3L1,4.27M4,17V7.27L5,8.27V10H6.73L8,11.27V13H9.73L10.73,14H8V16H12.73L13.73,17H4M5,11H7V13H5V11M17,11H19V13H17V11M19,10H17V8H19V10M14,11H16V13H14.83L14,12.17V11M13,10H11.83L11,9.17V8H13V10M22,7V17C22,17.86 21.45,18.58 20.7,18.87L18.83,17H20V7H8.83L6.83,5H20A2,2 0 0,1 22,7M16,10H14V8H16V10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedKeyboardOff',
  mixins: [icon]
};
</script>