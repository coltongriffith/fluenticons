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
<path d="M7.75 3a1 1 0 0 1 .923.615l3.75 9a1 1 0 1 1-1.846.77L9.584 11H5.917l-.994 2.385a1 1 0 0 1-1.846-.77l3.75-9A1 1 0 0 1 7.75 3Zm0 3.6-1 2.4h2l-1-2.4Zm9.543-1.307a1 1 0 0 1 1.414 0l1.927 1.934c.223.182.365.46.366.77v.006c0 .31-.143.588-.366.77l-1.927 1.934a1 1 0 0 1-1.414-1.414L17.586 9H13a1 1 0 0 1 0-2h4.586l-.293-.293a1 1 0 0 1 0-1.414Zm1.414 9a1 1 0 0 0-1.414 1.414l.293.293H4a1 1 0 1 0 0 2h13.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextDirectionHorizontalLtr',
    mixins: [icon]
};
</script>