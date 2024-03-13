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
<path d="M15.75 13.997c.981 0 1.815.628 2.123 1.503h-2.056a.738.738 0 0 0-.066-.003H4.249a.749.749 0 0 0-.749.75v.577c0 .535.191 1.054.539 1.46 1.253 1.469 3.22 2.214 5.957 2.214h.168c.086.183.203.352.35.498l.934.933a14.6 14.6 0 0 1-1.452.07c-3.145 0-5.531-.906-7.098-2.74A3.75 3.75 0 0 1 2 16.824v-.578a2.249 2.249 0 0 1 2.249-2.249H15.75ZM9.996 2.002a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.78 17.784a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.061l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.498a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 1 0-1.06 1.06l1.218 1.22h-6.877l1.22-1.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonSwap',
    mixins: [icon]
};
</script>