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
<path d="M20 2.25a.75.75 0 0 1 .743.648L20.75 3v14a4.75 4.75 0 0 1-4.533 4.745L16 21.75H8a4.75 4.75 0 0 1-4.745-4.533L3.25 17V3.502A.75.75 0 0 1 4.743 3.4l.007.102V6.79h14.5V3a.75.75 0 0 1 .75-.75Zm-.75 11.25H4.75V17a3.25 3.25 0 0 0 3.066 3.245L8 20.25h8a3.25 3.25 0 0 0 3.245-3.066L19.25 17v-3.5Zm0-5.209H4.75V12h14.5V8.291Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEraserTool',
    mixins: [icon]
};
</script>