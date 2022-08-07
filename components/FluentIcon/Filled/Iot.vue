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
<path d="M19 4.491a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.118A3.99 3.99 0 0 1 16 12V12.058l1.296.261a2.5 2.5 0 1 1-.279 1.474l-1.32-.265a4.015 4.015 0 0 1-1.742 1.963l.495 1.512h.05a2.5 2.5 0 1 1-1.472.478l-.496-1.516a3.994 3.994 0 0 1-3.752-1.593l-1.795.848a2.5 2.5 0 1 1-.608-1.372l1.754-.828a4.006 4.006 0 0 1 .784-3.567l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.983 1.12A3.982 3.982 0 0 1 12 8c.505 0 .99.094 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.492Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledIot',
    mixins: [icon]
};
</script>