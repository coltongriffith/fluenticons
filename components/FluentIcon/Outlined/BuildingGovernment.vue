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
<path d="M15.5 11.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM11.75 11a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM9.5 11.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM5.75 15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75ZM19 16.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.75 2h3.75a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3v1.018A7 7 0 0 1 19 13h.75A2.25 2.25 0 0 1 22 15.25v6a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-6A2.25 2.25 0 0 1 4.25 13H5a7.002 7.002 0 0 1 6-6.93V2.75a.75.75 0 0 1 .75-.75ZM12 7.5A5.5 5.5 0 0 0 6.5 13v.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v5.25h6v-2.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v2.75h6v-5.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1-.75-.75V13A5.5 5.5 0 0 0 12 7.5Zm1 11h-2v2h2v-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBuildingGovernment',
    mixins: [icon]
};
</script>