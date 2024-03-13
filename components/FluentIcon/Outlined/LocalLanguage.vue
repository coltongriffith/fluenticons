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
<path d="m9.34 6.372.05.105 5.56 14.5a.755.755 0 0 1-.418.971.73.73 0 0 1-.91-.333l-.043-.092-1.433-3.737H5.06l-.094-.006-1.546 3.76a.73.73 0 0 1-.963.401.754.754 0 0 1-.427-.885l.033-.096 5.964-14.5a.73.73 0 0 1 1.314-.088Zm9.406-4.37a.75.75 0 0 1 .743.65l.007.1V7.5h1.75a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743L21.245 9l-1.75-.001v7.25a.75.75 0 0 1-.648.744l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102V2.753a.75.75 0 0 1 .75-.75ZM8.81 8.748 5.65 16.286h6.11L8.81 8.747Zm1.937-6.744h5.498a.75.75 0 0 1 .743.648l.006.102v3.004c0 2.344-1.9 4.245-4.245 4.245a.75.75 0 0 1 0-1.5c1.46 0 2.654-1.14 2.74-2.578l.005-.167V3.503h-4.747a.75.75 0 0 1-.102-1.493l.102-.007h5.498-5.498Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLocalLanguage',
    mixins: [icon]
};
</script>