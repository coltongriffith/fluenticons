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
<path d="m15.989 4-3.067 3.063a3.5 3.5 0 0 0-.778 1.18l-.08.224-.74 2.295a2.25 2.25 0 0 0 2.633 2.885l.156-.04 2.328-.7a3.502 3.502 0 0 0 1.285-.706l.181-.169L22 7.946v8.809a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.755v-4.2l.076-.031.073-.041 3.76-2.363.098-.052a.75.75 0 0 1 1.01.933l-.046.104-1.208 2.286-.07.145a2.25 2.25 0 0 0 2.993 2.953l.17-.086 1.765-.996.085-.057a.75.75 0 0 0-.735-1.292l-.092.045-1.759.993-.098.046a.75.75 0 0 1-.974-.957l.041-.093 1.208-2.286.08-.166a2.25 2.25 0 0 0-3.121-2.874l-.146.084L2 10.805V7.25a3.25 3.25 0 0 1 3.066-3.245L5.25 4H15.99Zm5.187-.455.13.12.12.13a2.269 2.269 0 0 1-.121 3.08l-4.281 4.273a2.25 2.25 0 0 1-.943.562l-2.327.7a1 1 0 0 1-1.24-1.265l.74-2.295c.109-.34.298-.65.551-.903l4.29-4.283a2.27 2.27 0 0 1 3.08-.12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWhiteboard',
    mixins: [icon]
};
</script>