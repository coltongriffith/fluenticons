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
<path d="M12.651 2.638a2.25 2.25 0 0 1 3.19.023l4.91 5.008a2.25 2.25 0 0 1-.007 3.158l-.687.695a6.5 6.5 0 0 0-9.043 5.552l-5.377-5.376-1.529 1.514a.75.75 0 0 0 .003 1.068l5.099 5.008a.75.75 0 0 0 1.058-.008l.804-.812c.086.579.249 1.132.477 1.65l-.214.217a2.25 2.25 0 0 1-3.176.023l-5.1-5.008a2.25 2.25 0 0 1-.006-3.204l9.598-9.508Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 12a5.495 5.495 0 0 1 5.5 5.5 5.5 5.5 0 1 1-5.5-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEraserMedium',
    mixins: [icon]
};
</script>