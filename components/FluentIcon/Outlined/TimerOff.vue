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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.993 3.994a8.5 8.5 0 1 0 12.013 12.013l2.493 2.494a.75.75 0 0 0 1.061-1.061L3.28 2.22Zm13.884 16.005a7 7 0 1 1-9.89-9.89l3.976 3.976v.939l.007.102a.75.75 0 0 0 1.36.325l4.547 4.548ZM11.437 8.255l1.313 1.313V8.75l-.007-.102a.75.75 0 0 0-1.306-.393Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19 13.5a7 7 0 0 1-.296 2.022l1.174 1.175A8.5 8.5 0 0 0 8.803 5.622l1.175 1.174A7 7 0 0 1 19 13.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="m19.147 5.114.083.06 1.158.964a.75.75 0 0 1-.877 1.212l-.082-.06-1.159-.964a.75.75 0 0 1 .877-1.212ZM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTimerOff',
    mixins: [icon]
};
</script>