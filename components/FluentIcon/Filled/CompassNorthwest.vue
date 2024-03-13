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
<path d="M3.25 11h-1.2A10.003 10.003 0 0 1 11 2.05v1.2a.75.75 0 0 0 1.5 0V2.013c4.957.244 8.965 4.097 9.451 8.987h-1.2a.75.75 0 0 0 0 1.5h1.237a10 10 0 0 1-9.488 9.488V20.75a.75.75 0 0 0-1.5 0v1.201c-4.89-.486-8.743-4.494-8.987-9.45H3.25a.75.75 0 0 0 0-1.5Zm11.404.526a4 4 0 0 0-2.196-2.14L8.43 7.781a.5.5 0 0 0-.65.65l1.606 4.028a4 4 0 0 0 2.14 2.195l4.325 1.854a.5.5 0 0 0 .657-.656l-1.854-4.326Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCompassNorthwest',
    mixins: [icon]
};
</script>