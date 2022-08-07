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
<path d="M6.75 19h10.5a.75.75 0 0 1 .102 1.493l-.102.007H6.75a.75.75 0 0 1-.102-1.493L6.75 19h10.5-10.5Zm10.5-15a.75.75 0 0 1 .743.648L18 4.75v6c0 4.394-2.063 6.75-6.003 6.75-3.855 0-5.91-2.255-5.994-6.466L6 10.75v-6a.75.75 0 0 1 1.493-.102l.007.102v6C7.496 14.358 8.933 16 11.997 16c2.985 0 4.428-1.56 4.5-4.976l.003-.274v-6a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextUnderline',
    mixins: [icon]
};
</script>