<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-message-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.39 1.73L1.11 3L2.22 4.11C2.08 4.38 2 4.68 2 5V19C2 20.1 2.89 21 4 21H11C12.1 21 13 20.1 13 19V14.89L20.84 22.73L22.11 21.46L2.39 1.73M11 17H4V7H5.11L11 12.89V17M23 4.5V7.5C23 8.33 22.33 9 21.5 9H18L15.1 11.9L15 11.8V4.5C15 3.67 15.67 3 16.5 3H21.5C22.33 3 23 3.67 23 4.5M10.2 7L6.2 3H11C12.1 3 13 3.9 13 5V9.8L11 7.8V7H10.2" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneMessageOff.svg',
  mixins: [icon]
};
</script>