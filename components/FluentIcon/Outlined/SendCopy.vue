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
<path d="M19.75 11.5a.75.75 0 0 1 .743.648l.007.102v5a4.75 4.75 0 0 1-4.533 4.745L15.75 22h-7.5c-.98 0-1.813-.626-2.122-1.5h9.622l.184-.005a3.25 3.25 0 0 0 3.06-3.06L19 17.25v-5a.75.75 0 0 1 .75-.75Zm-2.5-2a.75.75 0 0 1 .743.648l.007.102v7a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-10a2.25 2.25 0 0 1-2.245-2.096L3.5 17.25v-7a.75.75 0 0 1 1.493-.102L5 10.25v7c0 .38.282.694.648.743L5.75 18h10a.75.75 0 0 0 .743-.648l.007-.102v-7a.75.75 0 0 1 .75-.75ZM6.218 6.216l3.998-3.996a.75.75 0 0 1 .976-.073l.084.072 4.004 3.997a.75.75 0 0 1-.976 1.134l-.084-.073-2.72-2.714v9.692a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L10 14.255V4.556L7.279 7.277a.75.75 0 0 1-.977.072l-.084-.072a.75.75 0 0 1-.072-.977l.072-.084 3.998-3.996-3.998 3.996Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSendCopy',
    mixins: [icon]
};
</script>