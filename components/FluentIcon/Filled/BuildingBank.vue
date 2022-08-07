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
<path d="M10.968 2.325a1.75 1.75 0 0 1 2.064 0l7.421 5.416c.977.712.474 2.257-.734 2.26H4.28c-1.208-.003-1.71-1.548-.734-2.26l7.421-5.416ZM13 6.25a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM11.25 16h-2v-5h2v5ZM14.75 16h-2v-5h2v5ZM18.5 16h-2.25v-5h2.25v5ZM18.75 17H5.25A2.25 2.25 0 0 0 3 19.25v.5c0 .415.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-.5A2.25 2.25 0 0 0 18.75 17ZM7.75 16H5.5v-5h2.25v5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBuildingBank',
    mixins: [icon]
};
</script>