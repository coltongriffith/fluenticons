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
<path d="M5 4.25A2.25 2.25 0 0 1 7.25 2h8.5A2.25 2.25 0 0 1 18 4.25V12h3.5v3.25a3.25 3.25 0 0 1-3.25 3.25h-5.326c.05-.326.076-.66.076-1a6.472 6.472 0 0 0-1.376-4h2.626a.75.75 0 0 0 0-1.5H9.966A6.52 6.52 0 0 0 5 11.174V4.25ZM18 17h.25A1.75 1.75 0 0 0 20 15.25V13.5h-2V17ZM8.75 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm3.25 9a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18l.001 2.503a.5.5 0 1 1-1 0V18H3.496a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1H7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledReceiptAdd',
    mixins: [icon]
};
</script>