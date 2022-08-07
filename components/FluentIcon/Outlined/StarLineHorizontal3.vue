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
<path d="M13.209 3.103c-.495-1.004-1.926-1.004-2.421 0L8.43 7.88l-5.273.766c-1.107.161-1.55 1.522-.748 2.303l3.815 3.72-.9 5.25c-.19 1.103.968 1.944 1.959 1.423l5.064-2.662a.75.75 0 0 0-.698-1.328l-4.795 2.521.862-5.03a1.35 1.35 0 0 0-.388-1.194l-3.654-3.562 5.05-.734c.44-.064.82-.34 1.016-.738l2.258-4.576 2.489 5.043a.75.75 0 0 0 .673.418h6.09a.75.75 0 0 0 0-1.5h-5.624l-2.417-4.897Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.5 12.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM14.5 16.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStarLineHorizontal3',
    mixins: [icon]
};
</script>