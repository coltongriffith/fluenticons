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
<path d="M18.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.752V5.25A2.25 2.25 0 0 1 5.25 3h13.499ZM9.812 7.949l-1.557 3.55H6.75a.75.75 0 0 0 0 1.5h1.995a.75.75 0 0 0 .687-.448l1.035-2.362 2.337 5.835a.75.75 0 0 0 1.367.057L15.713 13h1.537a.75.75 0 1 0 0-1.5h-2a.75.75 0 0 0-.67.414l-1.004 2.004-2.381-5.947a.75.75 0 0 0-1.383-.022Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPulseSquare',
    mixins: [icon]
};
</script>