<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bag-carry-on-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.1 4.9L6 8.9V19C6 19.5 6.2 20 6.6 20.4C7 20.8 7.5 21 8 21V10.8L9 11.8V21H13.2C13.1 20.6 13 20.2 13 20C13 18.8 13.5 18 14.6 17.4L15.4 18.2C14.5 18.5 14.1 19.2 14.1 20.1C14.1 20.6 14.3 21.1 14.7 21.5C15 21.8 15.5 22 16 22C16.9 22 17.6 21.6 17.9 20.7L19.1 21.9L20.5 20.5L3.5 3.5L2.1 4.9M12 2C12 2.5 12.2 3 12.6 3.4S13.5 4 14 4V7H9.8L16 13.2V2H12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBagCarryOnOff.svg',
  mixins: [icon]
};
</script>