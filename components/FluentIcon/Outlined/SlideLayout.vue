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
<path d="M6.75 7A1.75 1.75 0 0 0 5 8.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 15.25v-6.5A1.75 1.75 0 0 0 17.25 7H6.75ZM6.5 8.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v1.75h-11V8.75Zm4 3.25h7v3.25a.25.25 0 0 1-.25.25H10.5V12ZM9 12v3.5H6.75a.25.25 0 0 1-.25-.25V12H9Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75ZM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25V6.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSlideLayout',
    mixins: [icon]
};
</script>