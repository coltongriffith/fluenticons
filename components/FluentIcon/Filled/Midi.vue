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
<path d="M21.25 4.004a.75.75 0 0 1 .743.648l.007.102v14.495a.75.75 0 0 1-.648.744L21.25 20H2.75a.75.75 0 0 1-.743-.649L2 19.25V4.754a.75.75 0 0 1 .648-.743l.102-.007h18.5Zm-15.25 8H3.5V18.5h17v-6.496H18v4.246a.75.75 0 0 1-1.493.101l-.007-.101v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L13 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L9.5 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L6 16.25v-4.246ZM17.25 7.5h-2.5l-.102.007a.75.75 0 0 0 0 1.487L14.75 9h2.5l.102-.006A.75.75 0 0 0 17.25 7.5Zm-11 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm3 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMidi',
    mixins: [icon]
};
</script>