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
<path d="M21 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0V2.75ZM15.75 4A2.25 2.25 0 0 1 18 6.25v2.5A2.25 2.25 0 0 1 15.75 11H5.25A2.25 2.25 0 0 1 3 8.75v-2.5A2.25 2.25 0 0 1 5.25 4h10.5Zm0 9A2.25 2.25 0 0 1 18 15.25v2.5A2.25 2.25 0 0 1 15.75 20h-7a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 8.75 13h7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAlignRight',
    mixins: [icon]
};
</script>