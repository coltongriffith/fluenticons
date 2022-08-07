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
<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v6.772A6.5 6.5 0 0 0 12.022 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm7.28 3.53a.75.75 0 1 0-1.06-1.06L7.75 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2Zm0 5.5a.75.75 0 1 0-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2Zm2.97-5.78a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm9.75 9a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTaskListSquareAdd',
    mixins: [icon]
};
</script>