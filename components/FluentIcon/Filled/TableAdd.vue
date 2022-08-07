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
<path d="M9.5 21h2.522a6.52 6.52 0 0 1-.848-5H9.5v5ZM21 9.5v2.522a6.52 6.52 0 0 0-5-.848V9.5h5ZM14.5 9.5v2.232a6.53 6.53 0 0 0-2.768 2.768H9.5v-5h5ZM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5h5ZM14.5 3h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5H3Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableAdd',
    mixins: [icon]
};
</script>