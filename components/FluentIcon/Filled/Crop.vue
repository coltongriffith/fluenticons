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
<path d="M7 15.5a1.5 1.5 0 0 0 1.356 1.493L8.5 17H21a1 1 0 0 1 .117 1.993L21 19h-2v2a1 1 0 0 1-1.993.117L17 21v-2H8.5a3.5 3.5 0 0 1-3.495-3.308L5 15.5V7H3a1 1 0 0 1-.117-1.993L3 5h2V3a1 1 0 0 1 1.993-.117L7 3v12.5ZM8 5h7.5a3.5 3.5 0 0 1 3.495 3.308L19 8.5V16h-2V8.5a1.5 1.5 0 0 0-1.355-1.493L15.5 7H8V5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCrop',
    mixins: [icon]
};
</script>