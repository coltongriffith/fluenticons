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
<path d="M1 3a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4 12h1.5v6.75c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75H13V4h5.75A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75V12Zm15.33 8.401-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099Z" :fill="fill" :fill-opacity="opacity" />

<path d="M16.252 7.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedImageAltText',
    mixins: [icon]
};
</script>