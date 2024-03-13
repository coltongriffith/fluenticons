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
<path d="m3.651 6.617 7.502 4.753c.214.136.33.353.346.577V7.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-4.69a.742.742 0 0 1-.347.577l-7.5 4.747A.75.75 0 0 1 2.5 16.75v-9.5a.75.75 0 0 1 1.151-.633ZM21.248 6.5a.75.75 0 0 1 .75.75v9.499a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoPlayPause',
    mixins: [icon]
};
</script>