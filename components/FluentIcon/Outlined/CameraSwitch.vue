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
<path d="M21.25 7.5a.75.75 0 0 1 .743.648L22 8.25v8.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H6.061l.72.72a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2-.064-.072a1.213 1.213 0 0 1-.007-.01l.07.082a.753.753 0 0 1-.127-.89.775.775 0 0 1 .128-.17l2-2a.75.75 0 0 1 1.133.976l-.073.084-.72.72h12.69a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-8.5a.75.75 0 0 1 .75-.75Zm-3.054-5.353.084.073 2 2a.75.75 0 0 1 .071.081l-.07-.081a.746.746 0 0 1 .072.976.78.78 0 0 1-.068.08l-.005.004-2 2a.75.75 0 0 1-1.133-.976l.073-.084.718-.72H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v8.5a.75.75 0 0 1-1.493.102L2 15.75v-8.5a3.25 3.25 0 0 1 3.066-3.245L5.25 4h12.689l-.72-.72a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCameraSwitch',
    mixins: [icon]
};
</script>