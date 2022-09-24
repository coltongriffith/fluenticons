<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-comment-off" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4 3.9L1.11 3L2.39 1.73L22.11 21.46M22 16V4C22 2.9 21.11 2 20 2H5.2L20.95 17.75C21.57 17.41 22 16.76 22 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCommentOff',
  mixins: [icon]
};
</script>