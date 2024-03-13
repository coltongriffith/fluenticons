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
<path d="M6.237 3c.967 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 6.237 21h-2.5a1.75 1.75 0 0 1-1.75-1.75V4.75a1.75 1.75 0 0 1 1.607-1.743L3.737 3h2.5Zm14.026 0c.967 0 1.75.784 1.75 1.75v6.516a3.287 3.287 0 0 0-3.62.696l-2.38 2.38V4.75c0-.967.784-1.75 1.75-1.75h2.5Zm-1.615 18 3.365-3.365v1.616a1.75 1.75 0 0 1-1.75 1.75h-1.615Zm-6.157-3.135 2.496-2.497V4.75A1.75 1.75 0 0 0 13.237 3h-2.5a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h.428l.356-1.423c.162-.648.497-1.24.97-1.712Zm6.61-5.195-5.903 5.902a2.684 2.684 0 0 0-.707 1.247l-.457 1.831a1.087 1.087 0 0 0 1.318 1.318l1.83-.457a2.684 2.684 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 1 0 19.1 12.67Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledColumnTripleEdit',
    mixins: [icon]
};
</script>