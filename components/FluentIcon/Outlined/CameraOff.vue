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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.915 1.916A3.251 3.251 0 0 0 2 8.25v9.5A3.25 3.25 0 0 0 5.25 21h13.5c.358 0 .702-.058 1.024-.165l.945.945a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM18.44 19.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h.19l3.11 3.11a4.5 4.5 0 0 0 6.34 6.34l3.549 3.55Zm-8.822-8.822 4.205 4.205a3 3 0 0 1-4.206-4.206ZM11.245 8.063l1.54 1.541a3.006 3.006 0 0 1 2.111 2.11l1.54 1.541a4.5 4.5 0 0 0-5.192-5.192Z" :fill="fill" :fill-opacity="opacity" />

<path d="M20.5 8.25v9.068l1.364 1.365c.089-.296.136-.609.136-.933v-9.5A3.25 3.25 0 0 0 18.75 5h-2.07l-.815-1.387a2.25 2.25 0 0 0-1.94-1.11h-3.803a2.25 2.25 0 0 0-1.917 1.073l-.55.896 1.09 1.091.738-1.202.065-.09a.75.75 0 0 1 .574-.268h3.803a.75.75 0 0 1 .646.37l1.032 1.757c.135.23.381.37.647.37h2.5c.966 0 1.75.784 1.75 1.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCameraOff',
    mixins: [icon]
};
</script>