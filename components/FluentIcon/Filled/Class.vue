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
<path d="M17.25 2A2.75 2.75 0 0 1 20 4.75V19.25a2.75 2.75 0 0 1-2.75 2.75H6.75A2.75 2.75 0 0 1 4 19.249V4.75A2.75 2.75 0 0 1 6.75 2L7.041 2v8.167c0 .748.79 1.014 1.319.74l.09-.055 2.093-1.197 2.14 1.23c.446.308 1.261.1 1.35-.59l.008-.128V2h3.21Zm-4.709 0v7.076l-1.621-.932a.931.931 0 0 0-.793.022l-.107.063-1.479.846V2h4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClass',
    mixins: [icon]
};
</script>