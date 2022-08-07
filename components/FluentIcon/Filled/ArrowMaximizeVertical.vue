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
<path d="M15.207 6.207a1 1 0 0 1-1.414 0L13 5.414V9a1 1 0 1 1-2 0V5.414l-.793.793a1 1 0 0 1-1.414-1.414l2.5-2.5A.998.998 0 0 1 11.997 2h.006c.255 0 .51.098.704.293l2.5 2.5a1 1 0 0 1 0 1.414ZM5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm7.01 11a.996.996 0 0 0 .697-.293l2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V15a1 1 0 1 0-2 0v3.586l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5c.193.193.445.29.698.293" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowMaximizeVertical',
    mixins: [icon]
};
</script>