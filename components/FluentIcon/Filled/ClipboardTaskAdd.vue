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
<path d="M11.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H4.25A2.25 2.25 0 0 0 2 6.25v13.5A2.25 2.25 0 0 0 4.25 22h8.56A6.478 6.478 0 0 1 11 17.5c0-1.245.35-2.408.957-3.396L9.53 16.53a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L9 14.94l4.97-4.97a.75.75 0 1 1 1.06 1.06l-.926.927A6.47 6.47 0 0 1 18 11.018V6.25A2.25 2.25 0 0 0 15.75 4h-1.764a2.25 2.25 0 0 0-2.236-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1H18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardTaskAdd',
    mixins: [icon]
};
</script>