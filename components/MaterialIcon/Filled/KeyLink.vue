<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-key-link" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7C11.1 4.2 9.5 3 7.5 3M7.5 6C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9 6 8.3 6 7.5 6.7 6 7.5 6M10 14C8.4 14 6 15.1 6 18C6 20.9 8.4 22 10 22H11V20H10C9.7 20 8 19.9 8 18C8 16.2 9.5 16 10 16H11V14M13 14V16H14C14.3 16 16 16.1 16 18C16 19.8 14.5 20 14 20H13V22H14C15.6 22 18 20.9 18 18C18 15.1 15.6 14 14 14M9 17V19H15V17H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKeyLink.svg',
  mixins: [icon]
};
</script>