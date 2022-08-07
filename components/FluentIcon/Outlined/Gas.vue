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
<path d="M8.22 10.22a.75.75 0 0 1 1.06 0L12 12.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L13.06 14l.47.469 2 2 .001.002.25.249a.75.75 0 1 1-1.061 1.06l-.25-.249-2-2-.47-.47-2.72 2.72a.75.75 0 0 1-1.06-1.061L10.94 14l-2.72-2.72a.75.75 0 0 1 0-1.06ZM13.75 2a.75.75 0 0 0-.605.306L10.437 6H9v-.25A3.25 3.25 0 0 0 5.75 2.5h-1a.75.75 0 0 0 0 1.5h1c.966 0 1.75.784 1.75 1.75V6h-.75A2.75 2.75 0 0 0 4 8.75v10.5A2.75 2.75 0 0 0 6.75 22h10.5A2.75 2.75 0 0 0 20 19.25V8.75c0-.858-.393-1.625-1.01-2.13.007-.039.01-.079.01-.12V2.75a.75.75 0 0 0-.75-.75h-4.5Zm3.75 4.011A2.784 2.784 0 0 0 17.25 6h-4.953l1.833-2.5h3.37v2.511ZM6.75 7.5h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25V8.75c0-.69.56-1.25 1.25-1.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGas',
    mixins: [icon]
};
</script>