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
<path d="M14.5 14.5v-5h.25c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25Zm1 5a.75.75 0 0 1 .75.75v2.75h2V8.75a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0V13H8v2.25a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.25 8Zm6.5 0h1A3.25 3.25 0 0 1 18 11.25v1.5A3.25 3.25 0 0 1 14.75 16h-1a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHd',
    mixins: [icon]
};
</script>