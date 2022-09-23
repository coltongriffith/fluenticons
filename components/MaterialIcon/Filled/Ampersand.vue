<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ampersand" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4.4,16.5C4.4,15.6 4.7,14.7 5.2,13.9C5.7,13.1 6.7,12.2 8.2,11.2C7.3,10.1 6.8,9.3 6.5,8.7C6.1,8 6,7.4 6,6.7C6,5.2 6.4,4.1 7.3,3.2C8.2,2.3 9.4,2 10.9,2C12.2,2 13.3,2.4 14.2,3.2C15.1,4 15.5,5 15.5,6.1C15.5,6.9 15.3,7.6 14.9,8.3C14.5,9 13.8,9.7 12.8,10.4L11.4,11.5L15.7,16.7C16.3,15.5 16.6,14.3 16.6,12.8H18.8C18.8,15.1 18.3,17 17.2,18.5L20,21.8H17L15.7,20.3C15,20.9 14.3,21.3 13.4,21.6C12.5,21.9 11.6,22.1 10.7,22.1C8.8,22.1 7.3,21.6 6.1,20.6C5,19.5 4.4,18.2 4.4,16.5M10.7,20C12,20 13.2,19.5 14.3,18.5L9.6,12.8L9.2,13.1C7.7,14.2 7,15.3 7,16.5C7,17.6 7.3,18.4 8,19C8.7,19.6 9.5,20 10.7,20M8.5,6.7C8.5,7.6 9,8.6 10.1,9.9L11.7,8.8C12.3,8.4 12.7,8 12.9,7.6C13.1,7.2 13.2,6.7 13.2,6.2C13.2,5.6 13,5.1 12.5,4.7C12.1,4.3 11.5,4.1 10.8,4.1C10.1,4.1 9.5,4.3 9.1,4.8C8.7,5.3 8.5,5.9 8.5,6.7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAmpersand.svg',
  mixins: [icon]
};
</script>