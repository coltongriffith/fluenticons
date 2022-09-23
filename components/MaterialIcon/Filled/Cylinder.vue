<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cylinder" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 2C9.89 2 3 2.29 3 6V18C3 21.71 9.89 22 12 22C14.11 22 21 21.71 21 18V6C21 2.29 14.11 2 12 2M12 10C13.38 10 16.8 9.87 19 8.75V15.25C16.8 14.13 13.38 14 12 14S7.2 14.13 5 15.25V8.75C7.2 9.87 10.62 10 12 10M12 4C15.87 4 19 4.89 19 6C19 7.11 15.87 8 12 8C8.13 8 5 7.11 5 6C5 4.89 8.13 4 12 4M12 20C8.13 20 5 19.11 5 18C5 16.9 8.13 16 12 16C15.87 16 19 16.9 19 18C19 19.11 15.87 20 12 20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCylinder.svg',
  mixins: [icon]
};
</script>