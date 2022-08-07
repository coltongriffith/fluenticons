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
<path d="M15.929 9.754a.75.75 0 0 0-1.473-.281 2.478 2.478 0 0 1-.773 1.376 2.502 2.502 0 0 1-1.169.598.75.75 0 1 0 .307 1.469 3.977 3.977 0 0 0 1.872-.958 4.012 4.012 0 0 0 1.236-2.204Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6 2.75A.75.75 0 0 1 6.75 2h10.5a.75.75 0 0 1 .75.75v6.5a6.251 6.251 0 0 1-5.5 6.206v5.053l2.748-.009a.75.75 0 0 1 .004 1.5l-3.5.011h-.005l-3-.011a.75.75 0 0 1 .006-1.5l2.247.008v-5.056A5.751 5.751 0 0 1 6 9.75v-7Zm1.5.75v2.75h9V3.5h-9Zm0 6.25A4.25 4.25 0 0 0 11.75 14a4.75 4.75 0 0 0 4.75-4.75v-1.5h-9v2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDrinkWine',
    mixins: [icon]
};
</script>