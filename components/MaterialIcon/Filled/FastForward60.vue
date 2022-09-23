<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fast-forward-60" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.5 3C6.8 3 2.9 6 1.5 10.2L3.9 11C4.9 7.8 8 5.5 11.5 5.5C13.5 5.5 15.2 6.2 16.6 7.4L14 10H21V3L18.4 5.6C16.5 4 14.1 3 11.5 3M19 14V20C19 21.1 18.1 22 17 22H15C13.9 22 13 21.1 13 20V14C13 12.9 13.9 12 15 12H17C18.1 12 19 12.9 19 14M15 14V20H17V14H15M7 12C5.9 12 5 12.9 5 14V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V18C11 16.9 10.1 16 9 16H7V14H11V12H7M7 18H9V20H7V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFastForward60.svg',
  mixins: [icon]
};
</script>