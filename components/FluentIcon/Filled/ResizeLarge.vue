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
<path d="M4.5 6.25c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 0 0 0-1.5h-1.5A3.25 3.25 0 0 0 3 6.25v1.5a.75.75 0 0 0 1.5 0v-1.5ZM17.75 4.5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5A3.25 3.25 0 0 0 17.75 3h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.75 19.5a1.75 1.75 0 0 0 1.75-1.75v-1.5a.75.75 0 0 1 1.5 0v1.5A3.25 3.25 0 0 1 17.75 21h-1.5a.75.75 0 0 1 0-1.5h1.5ZM6.25 19.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 0-1.5 0v1.5A3.25 3.25 0 0 0 6.25 21h1.5a.75.75 0 0 0 0-1.5h-1.5ZM8.25 6A2.25 2.25 0 0 0 6 8.25v7.5A2.25 2.25 0 0 0 8.25 18h7.5A2.25 2.25 0 0 0 18 15.75v-7.5A2.25 2.25 0 0 0 15.75 6h-7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledResizeLarge',
    mixins: [icon]
};
</script>