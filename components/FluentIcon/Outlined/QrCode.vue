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
<path d="M8 6H6v2h2V6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h3.5A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-3.5ZM6 16h2v2H6v-2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3 15.25A2.25 2.25 0 0 1 5.25 13h3.5A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-3.5ZM18 6h-2v2h2V6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.25 3A2.25 2.25 0 0 0 13 5.25v3.5A2.25 2.25 0 0 0 15.25 11h3.5A2.25 2.25 0 0 0 21 8.75v-3.5A2.25 2.25 0 0 0 18.75 3h-3.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5ZM13 13h2.75v2.75H13V13ZM18.25 15.75h-2.5v2.5H13V21h2.75v-2.75h2.5V21H21v-2.75h-2.75v-2.5ZM18.25 15.75V13H21v2.75h-2.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedQrCode',
    mixins: [icon]
};
</script>