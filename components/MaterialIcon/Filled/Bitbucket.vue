<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bitbucket" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.65 3C2.3 3 2 3.3 2 3.65C2 3.69 2 3.73 2 3.77L4.73 20.27C4.8 20.69 5.16 21 5.58 21H18.63C18.94 21 19.22 20.78 19.27 20.46L22 3.77C22.05 3.42 21.81 3.09 21.46 3.04C21.43 3.03 21.39 3.03 21.35 3.03L2.65 3M14.1 14.95H9.94L8.81 9.07H15.11L14.1 14.95Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBitbucket.svg',
  mixins: [icon]
};
</script>