<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-semantic-web" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.9 4.22C18.73 6.84 20 2 20 2S18.89 8.07 13.79 10.55C12.75 11.06 12.1 11.33 12.1 11.33L3.73 7.25L12.1 3.82C12.1 3.82 11.9 3.76 12.9 4.22M11.12 22L3.33 17.78V9.07L11.12 13.04V22M12.88 22L20.68 17.78V9.07L12.88 13.04V22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSemanticWeb.svg',
  mixins: [icon]
};
</script>