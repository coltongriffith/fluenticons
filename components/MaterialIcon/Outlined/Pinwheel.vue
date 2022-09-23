<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pinwheel-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,23H11V16.43C9.93,17.4 8.5,18 7,18C3.75,18 1,15.25 1,12V11H7.57C6.6,9.93 6,8.5 6,7C6,3.75 8.75,1 12,1H13V7.57C14.07,6.6 15.5,6 17,6C20.25,6 23,8.75 23,12V13H16.43C17.4,14.07 18,15.5 18,17C18,20.25 15.25,23 12,23M13,13.13V20.87C14.7,20.41 16,18.83 16,17C16,15.17 14.7,13.59 13,13.13M3.13,13C3.59,14.7 5.17,16 7,16C8.83,16 10.41,14.7 10.87,13H3.13M13.13,11H20.87C20.41,9.3 18.82,8 17,8C15.18,8 13.59,9.3 13.13,11M11,3.13C9.3,3.59 8,5.18 8,7C8,8.82 9.3,10.41 11,10.87V3.13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPinwheel',
  mixins: [icon]
};
</script>