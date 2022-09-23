<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-variable-box" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7.4 18C5.9 16.5 5 14.3 5 12S5.9 7.5 7.4 6L9 6.7C7.7 7.9 7 9.9 7 12S7.7 16.1 9 17.3L7.4 18M12.7 15L11.9 13L10.5 15H9L11.3 11.9L10 9H11.3L12.1 11L13.5 9H15L12.8 12L14.1 15H12.7M16.6 18L15 17.3C16.3 16 17 14.1 17 12S16.3 7.9 15 6.7L16.6 6C18.1 7.5 19 9.7 19 12S18.1 16.5 16.6 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVariableBox.svg',
  mixins: [icon]
};
</script>