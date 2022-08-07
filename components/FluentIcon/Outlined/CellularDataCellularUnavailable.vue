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
<path d="M3.75 18.004a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.101L3 20.254v-1.5a.75.75 0 0 1 .75-.75Zm8-6a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.101L11 20.254v-7.5a.75.75 0 0 1 .75-.75Zm4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.101L15 20.254v-10.5a.75.75 0 0 1 .75-.75Zm4 10.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.101L7 20.25v-4.5a.75.75 0 0 1 .75-.75Zm11.984-8.996a.744.744 0 0 1 .74.641l.009.102.017 10.885a.746.746 0 0 1-.734.758.744.744 0 0 1-.74-.642l-.009-.101L19 6.76a.746.746 0 0 1 .734-.757Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCellularDataCellularUnavailable',
    mixins: [icon]
};
</script>