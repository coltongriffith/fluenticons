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
<path d="M16.5 6.5h-5.75a4.25 4.25 0 0 0-4.25 4.25v5.75H5.25A3.25 3.25 0 0 1 2 13.25v-8A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25V6.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22 18.75A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25v-8a3.25 3.25 0 0 1 3.25-3.25h8A3.25 3.25 0 0 1 22 10.75v8Zm-3.25 1.75a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9h-8A1.75 1.75 0 0 0 9 10.75v8c0 .966.784 1.75 1.75 1.75h8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPositionBackward',
    mixins: [icon]
};
</script>