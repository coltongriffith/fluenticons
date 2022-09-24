<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-comment-check" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 2H4C2.9 2 2 2.89 2 4V16C2 17.11 2.9 18 4 18H8V21C8 21.55 8.45 22 9 22H9.5C9.75 22 10 21.9 10.2 21.71L13.9 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M10.47 14L7 10.5L8.4 9.09L10.47 11.17L15.6 6L17 7.41L10.47 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCommentCheck',
  mixins: [icon]
};
</script>