<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-saw-blade" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,15C20,15 18.6,16.3 21.1,17L18.3,19.8H15.5C15.5,19.8 13.6,19.7 15,22H11L9,20C9,20 7.7,18.6 7,21.1L4.2,18.3V15.5C4.2,15.5 4.3,13.6 2,15V11L4,9C4,9 5.4,7.7 2.8,7.1L5.6,4.2H8.5C8.5,4.2 10.4,4.3 9,2H13L15,4C15,4 16.3,5.4 17,2.8L19.8,5.6V8.5C19.8,8.5 19.7,10.4 22,9V13L20,15M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSawBlade.svg',
  mixins: [icon]
};
</script>