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
<path d="M14.148 4.72a2.499 2.499 0 0 0-4.296 0 5.96 5.96 0 0 0-1.412-.546 4 4 0 0 1 7.12 0 5.959 5.959 0 0 0-1.412.546ZM9.384 7.437a7.95 7.95 0 0 1 1.658-.38 5 5 0 1 0-6.986 6.986 7.952 7.952 0 0 1 .381-1.659 3.5 3.5 0 0 1 4.947-4.947ZM19.943 14.042a5 5 0 1 0-6.986-6.986 7.952 7.952 0 0 1 1.659.381 3.5 3.5 0 0 1 4.947 4.947c.183.53.312 1.085.38 1.658ZM9.5 13.25a.75.75 0 0 1 .75-.75h4.25a.75.75 0 0 1 .495 1.313v.001l-.013.011-.053.05a9.548 9.548 0 0 0-.925 1.048c-.557.731-1.188 1.77-1.53 3.024a.75.75 0 1 1-1.448-.394c.408-1.496 1.152-2.707 1.783-3.538L12.82 14h-2.57a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLottery',
    mixins: [icon]
};
</script>