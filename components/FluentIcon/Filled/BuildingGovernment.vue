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
<path d="M15.5 2h-3.75a.75.75 0 0 0-.75.75v3.32A7.002 7.002 0 0 0 5 13h-.75A2.25 2.25 0 0 0 2 15.25v6c0 .414.336.75.75.75H10a.25.25 0 0 0 .25-.25v-3a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v3c0 .138.112.25.25.25h7.25a.75.75 0 0 0 .75-.75v-6A2.25 2.25 0 0 0 19.75 13H19a7 7 0 0 0-6.5-6.982V5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm0 9.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0ZM11.75 11a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.25.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0ZM5.75 15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm13.25.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBuildingGovernment',
    mixins: [icon]
};
</script>