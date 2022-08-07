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
<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75v6.75Zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5v-6.75Zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5v6.75Zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75V4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBorderAll',
    mixins: [icon]
};
</script>