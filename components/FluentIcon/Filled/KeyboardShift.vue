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
<path d="M10.88 2.467a1.754 1.754 0 0 0-.224.224L2.79 12.13a1.75 1.75 0 0 0 .224 2.465l.14.105c.288.195.63.3.98.3h2.864L7 20.25c0 .967.784 1.75 1.75 1.75h6.5l.143-.005A1.75 1.75 0 0 0 17 20.25L16.999 15h2.866a1.75 1.75 0 0 0 1.344-2.87L13.344 2.69a1.75 1.75 0 0 0-2.337-.32l-.127.096Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledKeyboardShift',
    mixins: [icon]
};
</script>