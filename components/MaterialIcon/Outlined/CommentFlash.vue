<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-comment-flash-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.5 16H20.3L22 12H17V18H19V23L22.5 16M15 18H13.9L10.2 21.7C10 21.9 9.8 22 9.5 22H9C8.4 22 8 21.6 8 21V18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V10H20V4H4V16H10V19.1L13.1 16H15V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCommentFlash',
  mixins: [icon]
};
</script>