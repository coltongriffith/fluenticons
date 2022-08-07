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
<path d="M8.25 4a.75.75 0 0 1 .75.75v2.773l1.874 2.815a.75.75 0 0 1 .126.416v4.496a.75.75 0 0 1-.75.75H8.996v3.254a.75.75 0 0 1-1.492.101l-.007-.101L7.496 16 5.5 15.999v3.258a.75.75 0 0 1-1.493.101l-.006-.101L4 15.999 2.75 16a.75.75 0 0 1-.749-.75v-4.496a.75.75 0 0 1 .126-.416l1.874-2.815V4.75a.75.75 0 0 1 .75-.75H8.25Zm7.004.001h4.496a.75.75 0 0 1 .743.649l.007.101L20.499 8h.75a.75.75 0 0 1 .75.75v4.496a.75.75 0 0 1-.125.416L20 16.477v2.773a.75.75 0 0 1-.75.75h-3.498a.75.75 0 0 1-.75-.75v-2.773l-1.874-2.815a.75.75 0 0 1-.126-.416V8.75a.75.75 0 0 1 .75-.75h.752V4.751a.75.75 0 0 1 .649-.743l.101-.007h4.496-4.496ZM19 5.501h-2.996V8h2.995V5.501Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledConnector',
    mixins: [icon]
};
</script>