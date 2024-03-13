<template>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity" d="M12 1.998a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm8.344 4.518a2.01 2.01 0 0 0-2.612-1.255l-1.607.6a.75.75 0 0 0-.416.381 4.086 4.086 0 0 1-7.386.01.75.75 0 0 0-.415-.38L6.28 5.264A2.007 2.007 0 0 0 4.816 9L8 10.31v3.148l-1.972 5.713a1.956 1.956 0 0 0 3.683 1.321l1.846-4.958a.48.48 0 0 1 .9-.002l1.882 5.009a1.94 1.94 0 0 0 3.652-1.315L16 13.446v-3.134l3.195-1.307a2.01 2.01 0 0 0 1.149-2.489Z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledAccessibility',
  mixins: [icon]
};
</script>