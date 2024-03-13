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
<path d="M4.25 3A2.25 2.25 0 0 0 2 5.25v12a2.25 2.25 0 0 0 2.04 2.24 3 3 0 0 0 5.919.01h2.082a3 3 0 0 0 5.918 0h1.791A2.25 2.25 0 0 0 22 17.25v-5.413a2.25 2.25 0 0 0-.217-.963l-1.699-3.587A2.25 2.25 0 0 0 18.051 6H16.5v-.75A2.25 2.25 0 0 0 14.25 3h-10Zm13.58 15a3.01 3.01 0 0 0-1.33-1.599V12.5h4v3h-1.25a.75.75 0 1 0 0 1.5h1.25v.25a.75.75 0 0 1-.75.75h-1.92ZM15 16a3.001 3.001 0 0 0-2.83 2H9.83a3.001 3.001 0 0 0-5.658-.004.75.75 0 0 1-.672-.746v-12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75V16Zm1.5-8.5h1.55a.75.75 0 0 1 .679.429L20.183 11H16.5V7.5ZM7 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedVehicleTruckProfile',
    mixins: [icon]
};
</script>