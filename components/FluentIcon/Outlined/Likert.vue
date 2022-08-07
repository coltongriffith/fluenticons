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
<path d="M10.75 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13.5 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.5 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19.5 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.75 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.5 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18.5 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm14 1.5A1.5 1.5 0 0 1 20.5 7v4.25h-13V5.5H19Zm1.5 7.25V17a1.5 1.5 0 0 1-1.5 1.5H7.5v-5.75h13ZM6 11.25H3.5V7A1.5 1.5 0 0 1 5 5.5h1v5.75Zm-2.5 1.5H6v5.75H5A1.5 1.5 0 0 1 3.5 17v-4.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLikert',
    mixins: [icon]
};
</script>