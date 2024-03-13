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
<path d="M13.75 4.5A3.25 3.25 0 0 1 17 7.75v.173l3.864-2.318A.75.75 0 0 1 22 6.248V17.75a.75.75 0 0 1-1.136.643L17 16.075v.175a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 2 16.25v-8.5A3.25 3.25 0 0 1 5.25 4.5h8.5Zm0 1.5h-8.5A1.75 1.75 0 0 0 3.5 7.75v8.5c0 .966.784 1.75 1.75 1.75h8.5a1.75 1.75 0 0 0 1.75-1.75v-8.5A1.75 1.75 0 0 0 13.75 6Zm6.75 1.573L17 9.674v4.651l3.5 2.1V7.573Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedVideo',
    mixins: [icon]
};
</script>