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
<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v8.25h5v-5H4.5V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V9.5H16v5h5V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM21 16h-5v5h1.75A3.25 3.25 0 0 0 21 17.75V16Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.5 14.5v-5h-5v5h5ZM9.5 16h5v5h-5v-5ZM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8v-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableFreezeRow',
    mixins: [icon]
};
</script>