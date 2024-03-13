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
<path d="M6.75 7.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.711.711 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75 0-5.385-4.365-9.75-9.75-9.75ZM13.294 18c.38 0 .701-.287.705-.666L14 17.25A7.25 7.25 0 0 0 6.666 10c-.379.005-.666.327-.666.706v.09c0 .399.351.704.75.704a5.75 5.75 0 0 1 5.75 5.75c0 .399.305.75.704.75h.09ZM9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRss',
    mixins: [icon]
};
</script>