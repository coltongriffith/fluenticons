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
<path d="M6.75 8a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75Zm.75 3.5v-2h9v2h-9ZM13.75 14a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-3.5Zm.75 2.5v-1h2v1h-2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4 3a2 2 0 0 0-1 3.732V20.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V6.732A2 2 0 0 0 20 3H4Zm15.5 4v12.5h-8v-4.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v4.75H4.5V7h15Zm-16-2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM10 19.5H7.5v-4H10v4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBuildingRetail',
    mixins: [icon]
};
</script>