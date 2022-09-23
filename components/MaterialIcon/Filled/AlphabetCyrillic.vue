<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alphabet-cyrillic" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 6C14.36 6 13 7.36 13 9V15C13 16.65 14.36 18 16 18H17C18.65 18 20 16.65 20 15V12C20 10.36 18.65 9 17 9H15C15 8.44 15.44 8 16 8H18C19.09 8 20 7.09 20 6M5 9V11H8C8.57 11 9 11.43 9 12H7C5.36 12 4 13.36 4 15C4 16.65 5.36 18 7 18H11V12C11 10.36 9.65 9 8 9M15 11H17C17.57 11 18 11.43 18 12V15C18 15.57 17.57 16 17 16H16C15.43 16 15 15.57 15 15M7 14H9V16H7C6.43 16 6 15.57 6 15C6 14.43 6.43 14 7 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAlphabetCyrillic.svg',
  mixins: [icon]
};
</script>