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
<path d="m12.229 5.642.912 1.853 2.044.295c.21.03.293.288.142.435l-1.479 1.44.35 2.036a.255.255 0 0 1-.37.269L12 11.008l-1.827.962a.255.255 0 0 1-.37-.269l.35-2.035-1.48-1.44a.255.255 0 0 1 .142-.436l2.044-.295.912-1.853a.255.255 0 0 1 .458 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19 9a7 7 0 1 0-12 4.898v7.352l.008.105a.75.75 0 0 0 1.175.508l3.816-2.687 3.819 2.688.089.054a.75.75 0 0 0 1.092-.668l.002-7.352A6.977 6.977 0 0 0 19 9Zm-3.5 6.064v4.741l-3.07-2.16-.1-.06a.75.75 0 0 0-.763.06l-3.066 2.16v-4.741A6.969 6.969 0 0 0 12 16c1.275 0 2.47-.34 3.5-.936ZM6.5 9a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRibbonStar',
    mixins: [icon]
};
</script>