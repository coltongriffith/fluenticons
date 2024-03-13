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
<path d="M13.25 4.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM4.5 10.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM14 20.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75ZM6.25 3a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 1 5.75 3h.5ZM7 20.25a.75.75 0 0 1-.75.75h-.5A2.75 2.75 0 0 1 3 18.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 .75.75ZM17.75 3a.75.75 0 0 0 0 1.5h.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3h-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBorderRight',
    mixins: [icon]
};
</script>