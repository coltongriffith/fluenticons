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
<path d="m14 15.061 6.72 6.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06L8.94 10 4 14.938a2.25 2.25 0 0 0-.58 1l-1.394 5.115a.75.75 0 0 0 .92.92l5.116-1.394a2.25 2.25 0 0 0 1-.58L14 15.061ZM19 10.06l-2.88 2.88-5.06-5.06L13.94 5 19 10.06ZM21.03 2.97a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEditOff',
    mixins: [icon]
};
</script>