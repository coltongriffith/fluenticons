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
<path d="M11.998 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M5.998 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" :fill="fill" :fill-opacity="opacity" />

<path d="M1.996 12c0-5.524 4.478-10.002 10.002-10.002C17.522 1.998 22 6.476 22 12c0 5.524-4.478 10.002-10.002 10.002-5.524 0-10.002-4.478-10.002-10.002Zm10.002-8.502a8.502 8.502 0 1 0 0 17.004 8.502 8.502 0 0 0 0-17.004Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTarget',
    mixins: [icon]
};
</script>