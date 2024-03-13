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
<path d="M4 3.77c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 6.27v-2.5Zm1.75-.25a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H5.75ZM4 10.77c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 13.27v-2.5Zm1.75-.25a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H5.75ZM5.75 16.02A1.75 1.75 0 0 0 4 17.77v2.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.27v-2.5a1.75 1.75 0 0 0-1.75-1.75H5.75Zm-.25 1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25v-2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRowTriple',
    mixins: [icon]
};
</script>