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
<path d="M2 6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm0 12.5A1.5 1.5 0 0 1 3.5 17h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 18.5ZM10.75 5a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2h-2.5ZM17 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLineStyle',
    mixins: [icon]
};
</script>