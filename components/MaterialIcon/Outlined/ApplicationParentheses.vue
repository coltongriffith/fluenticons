<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-application-parentheses-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M15.6 8C17.1 9.3 18 11.1 18 13C18 14.9 17.1 16.7 15.6 18L14 17.4C15.3 16.4 16 14.7 16 13S15.3 9.6 14 8.6L15.6 8M8.4 8L10 8.6C8.7 9.6 8 11.3 8 13S8.7 16.4 10 17.4L8.4 18C6.9 16.7 6 14.9 6 13S6.9 9.3 8.4 8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedApplicationParentheses',
  mixins: [icon]
};
</script>