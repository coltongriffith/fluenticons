<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-folder-pound" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.25,13H17.25L16.75,15H14.75L15.25,13M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20A2,2 0 0,1 22,8M20,12H18.5L19,10H18L17.5,12H15.5L16,10H15L14.5,12H13V13H14.25L13.75,15H12V16H13.5L13,18H14L14.5,16H16.5L16,18H17L17.5,16H19V15H17.75L18.25,13H20V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFolderPound.svg',
  mixins: [icon]
};
</script>