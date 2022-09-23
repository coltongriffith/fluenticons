<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-heart-multiple-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,21.1L10.5,22.4C3.9,16.5 0.5,13.4 0.5,9.6C0.5,8.4 0.9,7.3 1.5,6.4C1.5,6.6 1.5,6.8 1.5,7C1.5,11.7 5.4,15.2 12,21.1M13.6,17C18.3,12.7 21.5,9.9 21.6,7C21.6,5 20.1,3.5 18.1,3.5C16.5,3.5 15,4.5 14.5,5.9H12.6C12,4.5 10.5,3.5 9,3.5C7,3.5 5.5,5 5.5,7C5.5,9.9 8.6,12.7 13.4,17L13.5,17.1M18,1.5C21.1,1.5 23.5,3.9 23.5,7C23.5,10.7 20.1,13.8 13.5,19.8C6.9,13.9 3.5,10.8 3.5,7C3.5,3.9 5.9,1.5 9,1.5C10.7,1.5 12.4,2.3 13.5,3.6C14.6,2.3 16.3,1.5 18,1.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedHeartMultiple',
  mixins: [icon]
};
</script>