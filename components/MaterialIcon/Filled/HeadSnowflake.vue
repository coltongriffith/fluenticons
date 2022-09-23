<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-head-snowflake" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M17.06 9.57L15.1 10.09L16.54 11.54C16.89 11.88 16.89 12.46 16.54 12.81C16.19 13.16 15.61 13.16 15.27 12.81L13.81 11.37L13.3 13.33C13.18 13.82 12.68 14.1 12.21 13.97C11.72 13.84 11.44 13.35 11.57 12.87L12.1 10.9L10.13 11.43C9.65 11.56 9.15 11.28 9.03 10.79C8.9 10.32 9.18 9.82 9.67 9.7L11.63 9.19L10.19 7.73C9.84 7.39 9.84 6.82 10.19 6.46C10.54 6.11 11.12 6.11 11.46 6.46L12.91 7.9L13.43 5.94C13.55 5.46 14.04 5.18 14.5 5.3C15 5.43 15.28 5.92 15.16 6.41L14.63 8.37L16.59 7.84C17.08 7.72 17.57 8 17.7 8.5C17.82 8.96 17.54 9.45 17.06 9.57Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHeadSnowflake.svg',
  mixins: [icon]
};
</script>