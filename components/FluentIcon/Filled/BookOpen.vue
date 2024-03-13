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
<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6c.768 0 1.47-.289 2-.764.53.475 1.232.764 2 .764h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6c-.768 0-1.47.289-2 .764A2.989 2.989 0 0 0 10 4H4Zm7 3v10a1 1 0 0 1-1 1H4V6h6a1 1 0 0 1 1 1Zm2 10V7a1 1 0 0 1 1-1h6v12h-6a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBookOpen',
    mixins: [icon]
};
</script>