<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-emoticon-lol" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.07 8.93V4.93A4.06 4.06 0 0 1 15.73 2.72A10 10 0 0 0 2.73 15.72A4.06 4.06 0 0 1 4.94 15.06H8.94V19.06A4.06 4.06 0 0 1 8.28 21.27A10 10 0 0 0 21.28 8.27A4.06 4.06 0 0 1 19.07 8.93M11 6H12.5V7.5H14V9H11M7.5 14V12.5H6V11H9V14M15.89 15.9A5.5 5.5 0 0 1 9.8 17L17 9.8A5.5 5.5 0 0 1 15.89 15.89M4.89 21.08A2 2 0 0 1 2.89 19.08A2 2 0 0 1 4.89 17.08H6.89V19.08A2 2 0 0 1 4.93 21.07M19.07 2.93A2 2 0 0 1 21.07 4.93A2 2 0 0 1 19.07 6.93H17.07V4.93A2 2 0 0 1 19.07 2.93Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEmoticonLol.svg',
  mixins: [icon]
};
</script>