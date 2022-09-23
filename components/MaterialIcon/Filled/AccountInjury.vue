<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-account-injury" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8 6C8 3.79 9.79 2 12 2S16 3.79 16 6 14.21 10 12 10 8 8.21 8 6M17 22H18C19.1 22 20 21.1 20 20V15.22C20 14.1 19.39 13.07 18.39 12.56C17.96 12.34 17.5 12.13 17 11.94V22M12.34 17L15 11.33C14.07 11.12 13.07 11 12 11C9.47 11 7.29 11.7 5.61 12.56C4.61 13.07 4 14.1 4 15.22V22H6.34C6.12 21.55 6 21.04 6 20.5C6 18.57 7.57 17 9.5 17H12.34M10 22L11.41 19H9.5C8.67 19 8 19.67 8 20.5S8.67 22 9.5 22H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAccountInjury.svg',
  mixins: [icon]
};
</script>