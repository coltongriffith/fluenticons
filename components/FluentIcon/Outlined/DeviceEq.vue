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
<path d="M12 3a.75.75 0 0 1 .743.648l.007.102v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75A.75.75 0 0 1 12 3ZM8.255 6a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75Zm7.49 0a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75ZM4.751 9a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102l-.007-.102v-4.5a.75.75 0 0 1 .75-.75Zm14.501 0a.75.75 0 0 1 .744.648l.006.102v4.499a.75.75 0 0 1-1.493.101l-.007-.101V9.75a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDeviceEq',
    mixins: [icon]
};
</script>