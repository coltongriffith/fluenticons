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
<path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM5 6a1 1 0 0 1 1-1h1.225L5 7.651V6Zm0 3.207L8.53 5h2.686L5 12.408V9.207ZM12.521 5h2.687L5 17.165v-3.201L12.521 5Zm3.992 0H18a1 1 0 0 1 .83.44L7.451 19H6a1 1 0 0 1-.845-.464L16.513 5ZM19 6.793v3.201L11.443 19H8.757L19 6.793Zm0 4.757v3.201L15.435 19h-2.686L19 11.55Zm0 4.757V18a1 1 0 0 1-1 1h-1.26L19 16.307Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTabInPrivate',
    mixins: [icon]
};
</script>