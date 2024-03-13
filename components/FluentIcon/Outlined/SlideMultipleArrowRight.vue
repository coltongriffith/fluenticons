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
<path d="M4.5 17h-.25A2.25 2.25 0 0 1 2 14.75v-9A2.75 2.75 0 0 1 4.75 3h12A2.25 2.25 0 0 1 19 5.25v.25h-1.5v-.25a.75.75 0 0 0-.75-.75h-12c-.69 0-1.25.56-1.25 1.25v9c0 .414.336.75.75.75h.25V17Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.75 6.5A2.25 2.25 0 0 0 5.5 8.75v9.5a2.25 2.25 0 0 0 2.25 2.25h3.982a6.456 6.456 0 0 1-.558-1.5H7.75a.75.75 0 0 1-.75-.75v-9.5A.75.75 0 0 1 7.75 8h12a.75.75 0 0 1 .75.75v2.982A6.518 6.518 0 0 1 22 12.81V8.75a2.25 2.25 0 0 0-2.25-2.25h-12Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17H14.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSlideMultipleArrowRight',
    mixins: [icon]
};
</script>