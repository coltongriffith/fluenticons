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
<path d="M9.75 4.5a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.75.75h-4a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4a.75.75 0 0 1 .75.75v4c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4a.75.75 0 0 1 .75-.75h4a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-4a.75.75 0 0 1-.75-.75v-4a.25.25 0 0 0-.25-.25h-4.5ZM8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V8h3.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 16H16v3.25A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25V16H4.75A1.75 1.75 0 0 1 3 14.25v-4.5C3 8.784 3.784 8 4.75 8H8V4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDoctor',
    mixins: [icon]
};
</script>