<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-content-save-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.2 5L6.2 3H17L21 7V17.8L19 15.8V7.83L16.17 5H8.2M15 10V6H9.2L13.2 10H15M22.11 21.46L20.84 22.73L19.1 21C19.07 21 19.03 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.97 3 4.93 3 4.9L1.11 3L2.39 1.73L22.11 21.46M17.11 19L14.59 16.5C14.08 17.39 13.12 18 12 18C10.34 18 9 16.66 9 15C9 13.88 9.61 12.92 10.5 12.41L8.11 10H6V7.89L5 6.89V19H17.11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedContentSaveOff',
  mixins: [icon]
};
</script>