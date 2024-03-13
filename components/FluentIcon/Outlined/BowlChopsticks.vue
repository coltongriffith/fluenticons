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
<path d="M9.118 2.105a.75.75 0 0 1 1.027.263L14.075 9h7.16c.423 0 .765.342.765.765V12a9.993 9.993 0 0 1-4.73 8.5h2.98a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h2.98A9.993 9.993 0 0 1 2 12V9.765C2 9.342 2.342 9 2.765 9h5.567L4.855 3.132a.75.75 0 0 1 1.29-.764L10.075 9h2.257L8.855 3.132a.75.75 0 0 1 .263-1.027ZM3.5 10.5V12c0 .338.02.672.058 1h16.884c.038-.328.058-.662.058-1v-1.5h-17Zm.374 4a8.504 8.504 0 0 0 16.252 0H3.874Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBowlChopsticks',
    mixins: [icon]
};
</script>