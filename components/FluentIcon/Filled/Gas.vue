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
<path d="M13.145 2.306A.75.75 0 0 1 13.75 2h4.5a.75.75 0 0 1 .75.75V6.5a.762.762 0 0 1-.01.12A2.744 2.744 0 0 1 20 8.75v10.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25V8.75A2.75 2.75 0 0 1 6.75 6h.75v-.25A1.75 1.75 0 0 0 5.75 4h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 9 5.75V6h1.437l2.708-3.694ZM17.5 3.5h-3.37L12.297 6h4.953c.084 0 .168.004.25.011V3.5Zm-9.28 6.72a.75.75 0 0 0 0 1.06L10.94 14l-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 15.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L13.06 14l2.72-2.72a.75.75 0 1 0-1.06-1.06L12 12.94l-2.72-2.72a.75.75 0 0 0-1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGas',
    mixins: [icon]
};
</script>