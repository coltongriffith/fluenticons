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
<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5H5.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0ZM17.504 9.252a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13 6.5a6.5 6.5 0 0 1-9 6.002v6.248c0 .627.178 1.213.485 1.71l6.939-6.813.135-.122a2.25 2.25 0 0 1 2.889.006l.128.117 6.939 6.811A3.235 3.235 0 0 0 22 18.75V7.25A3.25 3.25 0 0 0 18.75 4h-6.248c.32.77.498 1.614.498 2.5Zm1.5 2.752a2.252 2.252 0 1 1 4.504 0 2.252 2.252 0 0 1-4.504 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="m12.475 14.718.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.235 3.235 0 0 1 18.75 22H7.25a3.235 3.235 0 0 1-1.703-.481l6.928-6.801Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImageArrowCounterclockwise',
    mixins: [icon]
};
</script>