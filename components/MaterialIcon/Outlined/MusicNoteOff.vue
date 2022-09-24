<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-music-note-off-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedMusicNoteOff',
  mixins: [icon]
};
</script>