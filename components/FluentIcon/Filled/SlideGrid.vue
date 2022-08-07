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
<path d="M6.25 12.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-4Zm7.5 0c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-4ZM6.25 7C5.56 7 5 7.56 5 8.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-4Zm7.5 0c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2C19 7.56 18.44 7 17.75 7h-4ZM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75ZM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSlideGrid',
    mixins: [icon]
};
</script>