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
<path d="M20.25 12.028c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.784-1.75 1.75-1.75h2.5Zm-14 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2 16.278v-2.5c0-.966.784-1.75 1.75-1.75h2.5Zm7 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 16.278v-2.5c0-.966.784-1.75 1.75-1.75h2.5Zm0-7c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 9.278v-2.5c0-.966.784-1.75 1.75-1.75h2.5Zm7 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 16 9.278v-2.5c0-.966.784-1.75 1.75-1.75h2.5Zm-14 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2 9.278v-2.5a1.75 1.75 0 0 1 1.606-1.744l.144-.006h2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDockRow',
    mixins: [icon]
};
</script>