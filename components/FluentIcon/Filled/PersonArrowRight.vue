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
<path d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.249 2.249 0 0 0-2.249 2.25v.919c0 .572.179 1.13.51 1.596C4.057 20.929 6.58 22 10 22c.931 0 1.796-.08 2.592-.238A6.475 6.475 0 0 1 11 17.5ZM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.647-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.647 1.647a.5.5 0 0 0 .707.707l2.5-2.5a.497.497 0 0 0 .147-.345V17.5a.498.498 0 0 0-.15-.357l-2.497-2.496Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonArrowRight',
    mixins: [icon]
};
</script>