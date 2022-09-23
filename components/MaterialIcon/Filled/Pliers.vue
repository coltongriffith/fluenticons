<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pliers" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.4 12.2C9.4 12.2 11.7 15.3 13.8 17.4C14.7 18.3 15.6 18.9 16.3 19.4C17.1 19.9 17.3 21 16.6 21.7C16.2 22.1 15.5 22.3 15 22C14.2 21.6 13 20.8 11.7 19.6C9.6 17.5 7.3 14.4 7.3 14.4L9.4 12.2M12.2 9.4C12.2 9.4 15.3 11.7 17.4 13.8C18.3 14.7 18.9 15.6 19.4 16.3C19.9 17.1 21 17.3 21.7 16.6C22.1 16.2 22.3 15.5 22 15C21.6 14.2 20.8 13 19.6 11.7C17.5 9.6 14.4 7.3 14.4 7.3L12.2 9.4M10.4 5.5L7.6 2.7L4.1 2L3.6 2.5L5.9 4.8C6.4 4.7 6.9 4.8 7.3 5.2C7.9 5.8 7.9 6.7 7.3 7.3S5.8 7.9 5.2 7.3C4.8 6.9 4.7 6.3 4.8 5.8L2.5 3.6L2 4.1L2.7 7.6L5.5 10.4L6.9 13.2L8.8 11.3L7.8 9.5L9.4 7.9L11.3 8.8L13.2 6.9L10.4 5.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPliers.svg',
  mixins: [icon]
};
</script>