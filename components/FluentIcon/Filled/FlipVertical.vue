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
<path d="M17.5 4.5a.75.75 0 0 0-1.108-.659l-11.5 6.25A.75.75 0 0 0 5.25 11.5h11.5a.75.75 0 0 0 .75-.75V4.5Zm-2 5h-5.332L15.5 6.602V9.5ZM17.5 19.5a.75.75 0 0 1-1.108.659l-11.5-6.25A.75.75 0 0 1 5.25 12.5h11.5a.75.75 0 0 1 .75.75v6.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlipVertical',
    mixins: [icon]
};
</script>