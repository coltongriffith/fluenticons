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
<path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v7.5A2.25 2.25 0 0 0 4.25 14h1.942l1.894 3.6a.75.75 0 0 0 1.328 0l1.894-3.6h1.942a2.25 2.25 0 0 0 2.25-2.25v-7.5A2.25 2.25 0 0 0 13.25 2h-9ZM5.5 6.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75c0 2.151-1.288 3.599-1.72 4.03a.75.75 0 1 1-1.06-1.06c.2-.201.612-.662.915-1.326A.75.75 0 0 1 5.5 7.25v-1Zm4 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75c0 2.151-1.288 3.599-1.72 4.03a.75.75 0 1 1-1.06-1.06c.2-.201.612-.662.915-1.326A.75.75 0 0 1 9.5 7.25v-1ZM2.75 16.5h3.628l.79 1.5H2.75a.75.75 0 0 1 0-1.5Zm18.5 1.5H10.333l.79-1.5H21.25a.75.75 0 0 1 0 1.5ZM2 21.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTooltipQuote',
    mixins: [icon]
};
</script>