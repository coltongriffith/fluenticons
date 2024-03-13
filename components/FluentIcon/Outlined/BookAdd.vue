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
<path d="M3 4.5A2.5 2.5 0 0 1 5.5 2H17a2.5 2.5 0 0 1 2.5 2.5v6.813a6.475 6.475 0 0 0-1.5-.294V4.5a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1V18h6.519c.04.52.14 1.022.294 1.5H4.5a1 1 0 0 0 1 1h6.232A6.518 6.518 0 0 0 12.81 22H5.5A2.5 2.5 0 0 1 3 19.5v-15ZM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0ZM6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6Zm1.5 1.5h7v-1h-7v1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBookAdd',
    mixins: [icon]
};
</script>