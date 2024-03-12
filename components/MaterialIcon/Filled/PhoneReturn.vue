<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-phone-return" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21,6V11H19.5V7.5H13.87L16.3,9.93L15.24,11L11,6.75L15.24,2.5L16.3,3.57L13.87,6H21M8.82,8.58C9.08,8.32 9.17,7.93 9.06,7.58C8.69,6.42 8.5,5.22 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.79,15.5 17.58,15.31 16.43,14.93C16.08,14.82 15.69,14.91 15.43,15.17L13.23,17.37C10.39,15.92 8.09,13.62 6.64,10.78L8.82,8.58Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledPhoneReturn',
  mixins: [icon]
};
</script>