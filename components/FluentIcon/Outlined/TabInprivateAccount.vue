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
<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.604a4.01 4.01 0 0 0-1.5-1.063V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h6.254c.022.536.15 1.039.367 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18 14.5a1.5 1.5 0 0 1 0-3v.5h2.83a2.997 2.997 0 0 0-.594-1H18v-1a3 3 0 1 0 2.236 5H18v-.5ZM14.938 17c-.582 0-1.07.282-1.396.635-.324.35-.542.823-.542 1.309v.384C13 21.289 15.041 23 18 23v-1h3.473a3.93 3.93 0 0 0 .997-1H18v.5c-2.53 0-3.5-1.389-3.5-2.172v-.384c0-.046.03-.169.143-.29.107-.115.217-.154.294-.154H18V18h4.73a2.135 2.135 0 0 0-.272-.365c-.327-.353-.814-.635-1.395-.635h-6.125Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18 14v-1h3c0 .35-.06.687-.17 1H18ZM22.919 20H18v-1h5v.328c0 .228-.028.453-.081.672Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTabInprivateAccount',
    mixins: [icon]
};
</script>