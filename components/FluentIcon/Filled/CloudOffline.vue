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
<path d="m4.281 4.225 14.496 14.496a.75.75 0 1 1-1.06 1.06l-3.786-3.785H6.693a3.687 3.687 0 0 1-3.692-3.682 3.687 3.687 0 0 1 3.568-3.68L3.22 5.285a.75.75 0 1 1 1.06-1.06Zm7.72-.224c3.168 0 4.965 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.686 3.686 0 0 1-2.91 3.6L7.931 5.752c.884-1.066 2.25-1.751 4.068-1.751Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCloudOffline',
    mixins: [icon]
};
</script>