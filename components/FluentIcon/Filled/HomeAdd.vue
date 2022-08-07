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
<path d="M21 11.978a6.5 6.5 0 0 1-8.298-9.864 2.25 2.25 0 0 0-2.153.419L3.8 8.227A2.25 2.25 0 0 0 3 9.947v9.803c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75v-5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 21 19.75v-7.772Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.501 8.504V7h2.502a.5.5 0 1 0 0-1H18V3.5a.5.5 0 0 0-1 0V6h-2.504a.5.5 0 0 0 0 1h2.505v2.504a.5.5 0 0 0 1 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHomeAdd',
    mixins: [icon]
};
</script>