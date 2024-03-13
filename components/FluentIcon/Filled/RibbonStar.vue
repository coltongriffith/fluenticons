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
<path d="m17 21.245.002-6A7.966 7.966 0 0 1 12 17a7.966 7.966 0 0 1-5-1.754l.003 6a.75.75 0 0 0 1.181.612l3.817-2.687 3.818 2.687a.75.75 0 0 0 1.182-.613Z" :fill="fill" :fill-opacity="opacity" />
<linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
<path d="M19 9A7 7 0 1 0 5 9a7 7 0 0 0 14 0Zm-6.771-3.358.912 1.853 2.044.295c.21.03.293.288.142.435l-1.479 1.44.35 2.036a.255.255 0 0 1-.37.269L12 11.008l-1.827.962a.255.255 0 0 1-.37-.269l.35-2.035-1.48-1.44a.255.255 0 0 1 .142-.436l2.044-.295.912-1.853a.255.255 0 0 1 .458 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRibbonStar',
    mixins: [icon]
};
</script>