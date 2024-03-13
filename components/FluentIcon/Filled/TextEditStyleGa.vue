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
<path d="M10.75 2.5a.75.75 0 0 1 .75.75V6.5H13A.75.75 0 0 1 13 8h-1.5v3.03L10 12.529V3.25a.75.75 0 0 1 .75-.75Zm-.425 11.118 1.175-1.174v.001l4.01-4.002a3.22 3.22 0 0 1 4.553.002 3.218 3.218 0 0 1-.002 4.551l-7.114 7.102a2.25 2.25 0 0 1-.978.573l-4.613 1.303a.75.75 0 0 1-.92-.94l1.387-4.543c.107-.354.3-.675.562-.936l1.94-1.937ZM2 4.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .747.682c.194 2.135-1.141 5.97-5.531 7.286a.75.75 0 1 1-.431-1.436C5.667 9.092 6.833 6.634 6.995 5H2.75A.75.75 0 0 1 2 4.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextEditStyleGa',
    mixins: [icon]
};
</script>