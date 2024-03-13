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
<path d="M9.75 9a.75.75 0 0 1 .75.75v2.5c0 .69.56 1.25 1.25 1.25h.75V9.75a.75.75 0 0 1 1.5 0v3.75h4.25a.75.75 0 0 1 0 1.5h-6.5A2.75 2.75 0 0 1 9 12.25v-2.5A.75.75 0 0 1 9.75 9Zm0-6a.75.75 0 0 1 .75.75V5h2V3.75a.75.75 0 0 1 1.5 0V5h2.75a.75.75 0 0 1 .696.471l.812 2.029h.992A2.75 2.75 0 0 1 22 10.25v5.5a2.75 2.75 0 0 1-2.75 2.75h-.992l-.812 2.029a.75.75 0 0 1-.696.471h-7.5a.75.75 0 0 1-.548-.238L5.74 17.588A2.75 2.75 0 0 1 5 15.712V12.5H3.5v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V11H5V7.75A2.75 2.75 0 0 1 7.75 5H9V3.75A.75.75 0 0 1 9.75 3Zm-2 3.5c-.69 0-1.25.56-1.25 1.25v7.962c0 .316.12.621.336.853l2.74 2.935h6.666l.812-2.029A.75.75 0 0 1 17.75 17h1.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1-.696-.471L16.242 6.5H7.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEngine',
    mixins: [icon]
};
</script>