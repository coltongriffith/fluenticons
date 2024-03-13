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
<path d="M13.821 6.5h5.929a2.25 2.25 0 0 1 2.229 1.938l.016.158.005.154v8.278l-2.013-2.012a1.75 1.75 0 0 0-2.82 1.985h-2.332a1.75 1.75 0 0 0-2.822-1.98l-2.5 2.498a1.75 1.75 0 0 0 0 2.476l.005.005H4.25a2.25 2.25 0 0 1-2.245-2.096L2 17.75v-7.251l6.207.001.196-.009a2.25 2.25 0 0 0 1.088-.393l.156-.12L13.821 6.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8.207 4c.46 0 .908.141 1.284.402l.156.12 2.103 1.751-3.063 2.553-.085.061a.75.75 0 0 1-.29.106L8.206 9 2 8.999V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h3.957ZM13.78 16.79a.75.75 0 0 0-1.06-1.062l-2.5 2.499a.75.75 0 0 0 0 1.06l2.5 2.497a.75.75 0 1 0 1.06-1.061L12.556 19.5h6.883l-1.219 1.216a.75.75 0 1 0 1.06 1.061l2.5-2.495a.75.75 0 0 0 0-1.061l-2.5-2.499a.75.75 0 0 0-1.06 1.062L19.437 18h-6.869l1.212-1.212Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFolderSwap',
    mixins: [icon]
};
</script>