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
<path d="M14.5 2a2 2 0 0 1 1.79 1.105c-.187.427-.29.9-.29 1.395 0 .66.183 1.277.5 1.804V6.4c.034.02.068.04.102.062.25.368.567.686.935.935C17.83 7.862 18 8.411 18 9v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2c0 1.11-.603 2.08-1.5 2.599V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2.401A2.999 2.999 0 0 1 6 15V9c0-1.11.603-2.08 1.5-2.599V4a2 2 0 0 1 2-2h5Zm-5 1.5A.5.5 0 0 0 9 4v2h6V4a.5.5 0 0 0-.5-.5h-5Zm7 11.5V9A1.5 1.5 0 0 0 15 7.5H9A1.5 1.5 0 0 0 7.5 9v6A1.5 1.5 0 0 0 9 16.5h6a1.5 1.5 0 0 0 1.5-1.5ZM9 20a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2H9v2ZM22 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSmartwatchDot',
    mixins: [icon]
};
</script>