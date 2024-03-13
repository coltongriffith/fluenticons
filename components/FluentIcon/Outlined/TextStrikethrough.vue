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
<path d="M4.75 12h14.5a.75.75 0 0 1 .102 1.493l-.101.007h-2.975c.88.813 1.336 1.793 1.336 2.935 0 2.825-3.232 4.64-6.754 4.23-2.235-.26-3.809-1.155-4.635-2.702a.75.75 0 0 1 1.323-.707c.57 1.068 1.702 1.712 3.485 1.92 2.743.318 5.081-.995 5.081-2.741 0-1.172-.805-2.127-2.565-2.886l-.116-.049H4.75a.75.75 0 0 1-.743-.648L4 12.75a.75.75 0 0 1 .648-.743L4.75 12h14.5-14.5Zm1.511-3.877c.152-2.83 2.822-4.468 6.324-4.061 2.188.254 3.863 1.053 4.982 2.409a.75.75 0 1 1-1.157.955c-.852-1.033-2.17-1.662-3.999-1.874-2.717-.316-4.65.804-4.65 2.571 0 .772.234 1.348.83 1.982l.128.132c.094.096.197.195.25.24l.031.02H7.08l-.024-.038c-.143-.206-.856-1.195-.795-2.336Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextStrikethrough',
    mixins: [icon]
};
</script>