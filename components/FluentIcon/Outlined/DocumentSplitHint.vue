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
<path d="M20 11.25a.75.75 0 0 1-1.5 0V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.25a.75.75 0 0 1-1.5 0V4a2 2 0 0 1 2-2h6.172c.028 0 .055.004.082.007.02.003.04.006.059.007.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a.652.652 0 0 1 .081.044c.078.053.148.116.219.18l.036.03a.493.493 0 0 1 .049.04l5.829 5.828A2.001 2.001 0 0 1 20 9.75v1.5Zm-6.5-6.629V8a.5.5 0 0 0 .5.5h3.378L13.5 4.621ZM4.75 13a.75.75 0 0 1 .75.75v2.495a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75Zm15.25.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0V13.75Zm-10.5 7.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-4-2a.75.75 0 0 0-1.5 0V20a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5H6a.5.5 0 0 1-.5-.5v-.75Zm13.75-.75a.75.75 0 0 0-.75.75V20a.5.5 0 0 1-.5.5h-1.25a.75.75 0 0 0 0 1.5H18a2 2 0 0 0 2-2v-.75a.75.75 0 0 0-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentSplitHint',
    mixins: [icon]
};
</script>