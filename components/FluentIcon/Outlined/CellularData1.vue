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
<path d="M3.75 17a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 19.25v-1.5a.75.75 0 0 1 .75-.75Zm8-6a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 19.25v-7.5a.75.75 0 0 1 .75-.75Zm4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 19.25V8.75a.75.75 0 0 1 .75-.75Zm3.993-3a.75.75 0 0 1 .75.64l.007.102v13.501a.75.75 0 0 1-1.492.116L19 19.258V5.757A.75.75 0 0 1 19.743 5ZM7.75 14a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 19.248V14.75a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCellularData1',
    mixins: [icon]
};
</script>