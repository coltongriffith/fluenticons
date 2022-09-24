<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clipboard-text-play-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H15V19H5V5H7V7H17V5H19V14H21V5A2,2 0 0,0 19,3M12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5M17,16V22L22,19L17,16M17,11H7V9H17V11M15,15H7V13H15V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedClipboardTextPlay',
  mixins: [icon]
};
</script>