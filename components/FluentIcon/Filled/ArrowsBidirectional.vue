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
<path d="M15.001 8.999H9.004l.001-2.25a.75.75 0 0 0-1.268-.542l-5.503 5.25a.75.75 0 0 0 0 1.086l5.504 5.25.082.068a.75.75 0 0 0 1.185-.611V15H15v2.25c0 .66.792.998 1.269.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543v2.249Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowsBidirectional',
    mixins: [icon]
};
</script>