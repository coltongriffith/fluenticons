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
<path d="M13 6.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.032 2.325a1.75 1.75 0 0 0-2.064 0L3.547 7.74c-.978.713-.473 2.26.736 2.26H4.5v5.8A2.75 2.75 0 0 0 3 18.25v1.5c0 .413.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-1.5a2.75 2.75 0 0 0-1.5-2.45V10h.217c1.21 0 1.713-1.547.736-2.26l-7.421-5.416Zm-1.18 1.211a.25.25 0 0 1 .295 0L18.95 8.5H5.05l6.803-4.964ZM18 10v5.5h-2V10h2Zm-3.5 0v5.5h-1.75V10h1.75Zm-3.25 0v5.5H9.5V10h1.75Zm-5.5 7h12.5c.69 0 1.25.56 1.25 1.25V19h-15v-.75c0-.69.56-1.25 1.25-1.25ZM6 15.5V10h2v5.5H6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBuildingBank',
    mixins: [icon]
};
</script>