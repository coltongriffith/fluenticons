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
<path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v8.5A2.25 2.25 0 0 0 4.25 17h.25V8.75A3.25 3.25 0 0 1 7.75 5.5H19v-.25A2.25 2.25 0 0 0 16.75 3H5.25ZM19.75 6.5h-.496l-.102.007A.75.75 0 0 0 19.254 8h.496l.102.007a.75.75 0 0 1 .648.743v1.004l.007.101A.75.75 0 0 0 22 9.754V8.75l-.005-.154A2.25 2.25 0 0 0 19.75 6.5Z" :fill="fill" :fill-opacity="opacity" />
<linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
<path d="M6.993 12.149a.75.75 0 0 0-1.493.102v2.494l.007.102A.75.75 0 0 0 7 14.745v-2.494l-.007-.102ZM6.25 16.495a.75.75 0 0 1 .743.648l.007.102v1.005c0 .38.282.694.648.743L7.75 19h.5a.75.75 0 0 1 .102 1.493l-.102.007h-.5a2.25 2.25 0 0 1-2.245-2.096L5.5 18.25v-1.005a.75.75 0 0 1 .75-.75ZM21.25 16.495a.75.75 0 0 1 .75.75v1.005a2.25 2.25 0 0 1-2.25 2.25h-1.003a.75.75 0 0 1 0-1.5h1.003a.75.75 0 0 0 .75-.75v-1.005a.75.75 0 0 1 .75-.75ZM16.248 19h-1.495l-.102.007a.75.75 0 0 0 .102 1.493h1.495l.102-.007A.75.75 0 0 0 16.248 19ZM10.75 19h1.496a.75.75 0 0 1 .102 1.493l-.102.007h-1.495a.75.75 0 0 1-.102-1.493L10.75 19ZM21.25 11.5a.75.75 0 0 1 .743.649l.007.102v2.494a.75.75 0 0 1-1.493.102l-.007-.102v-2.494a.75.75 0 0 1 .75-.75ZM8.753 6.5a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 0-.75.75v1.004a.75.75 0 0 1-1.5 0V8.75A2.25 2.25 0 0 1 7.75 6.5h1.003ZM16.752 6.5h-1.503l-.102.007A.75.75 0 0 0 15.25 8h1.503l.102-.007a.75.75 0 0 0-.102-1.493ZM11.25 6.5h1.495a.75.75 0 0 1 .102 1.493L12.745 8H11.25a.75.75 0 0 1-.102-1.493l.102-.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSlideHide',
    mixins: [icon]
};
</script>