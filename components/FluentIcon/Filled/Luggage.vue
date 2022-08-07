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
<path d="M8.75 3.5H9V5H7.25A3.25 3.25 0 0 0 4 8.25v9a3.25 3.25 0 0 0 3 3.24v.76a.75.75 0 0 0 1.5 0v-.75h7v.75a.75.75 0 0 0 1.5 0v-.76a3.25 3.25 0 0 0 3-3.24v-9A3.25 3.25 0 0 0 16.75 5H15V3.5h.25a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5ZM10.5 5V3.5h3V5h-3ZM7.75 9.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLuggage',
    mixins: [icon]
};
</script>