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
<path d="M5.25 2A2.25 2.25 0 0 0 3 4.25v3A2.25 2.25 0 0 0 5.25 9.5h13.5A2.25 2.25 0 0 0 21 7.25v-3A2.25 2.25 0 0 0 18.75 2H5.25ZM5 11.75V11h14v.75A2.25 2.25 0 0 1 16.75 14h-9.5A2.25 2.25 0 0 1 5 11.75ZM7.503 15.5H16.5v1.288a2.25 2.25 0 0 1-1.141 1.958l-.154.08-6.635 3.106a.75.75 0 0 1-1.061-.578l-.007-.101V15.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHighlight',
    mixins: [icon]
};
</script>