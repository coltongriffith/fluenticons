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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25a3.249 3.249 0 0 0-1.454 2.394l8.078 4.231 2.422 2.421-.168.088a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005 1.785 1.785a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM15.3 12.118l6.262 6.262c.278-.479.438-1.036.438-1.63V8.608l-6.7 3.51ZM7.182 4l7.007 7.007 7.795-4.083A3.25 3.25 0 0 0 18.75 4H7.182Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMailOff',
    mixins: [icon]
};
</script>