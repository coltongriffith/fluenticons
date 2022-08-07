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
<path d="M6.25 3.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h3.78a2.077 2.077 0 0 0 .27 1.5H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h6.086c.464 0 .909.184 1.237.513l5.914 5.914c.329.328.513.773.513 1.237V10h-.13a3.324 3.324 0 0 0-.332 0H14a2 2 0 0 1-2-2V3.5H6.25Zm7.25 1.06V8a.5.5 0 0 0 .5.5h3.44L13.5 4.56Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19.713 11h.002a2.286 2.286 0 0 1 1.615 3.902l-5.902 5.902a2.684 2.684 0 0 1-1.247.707l-1.831.457a1.087 1.087 0 0 1-1.318-1.318l.457-1.83c.118-.473.362-.904.707-1.248l5.902-5.902a2.278 2.278 0 0 1 1.615-.67Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentEdit',
    mixins: [icon]
};
</script>