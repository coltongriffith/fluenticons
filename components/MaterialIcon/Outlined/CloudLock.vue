<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cloud-lock-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 17C22.5 17 23 17.5 23 18V22C23 22.5 22.5 23 22 23H17C16.5 23 16 22.5 16 22V18C16 17.5 16.5 17 17 17V15.5C17 14.1 18.1 13 19.5 13C20.9 13 22 14.1 22 15.5V17M21 17V15.5C21 14.7 20.3 14 19.5 14C18.7 14 18 14.7 18 15.5V17H21M17.5 11V10.5C17.5 7.46 15.04 5 12 5C9.5 5 7.37 6.69 6.71 9H6C3.79 9 2 10.79 2 13C2 15.21 3.79 17 6 17H14.17C14.06 17.31 14 17.65 14 18V19H6C2.69 19 0 16.31 0 13C0 9.9 2.34 7.36 5.35 7.04C6.6 4.64 9.11 3 12 3C15.64 3 18.67 5.6 19.36 9.04C21.95 9.22 24 11.36 24 14L23.94 14.77C23.59 12.63 21.74 11 19.5 11H17.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCloudLock',
  mixins: [icon]
};
</script>