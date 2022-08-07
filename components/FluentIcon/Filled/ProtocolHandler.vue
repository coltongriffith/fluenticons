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
<path d="m13.482 17.732-.775-.775 2.482-2.482a3.5 3.5 0 0 0 0-4.95l-2.482-2.482.775-.775a2.5 2.5 0 0 1 3.536 0l3.964 3.964a2.5 2.5 0 0 1 0 3.536l-3.964 3.964a2.5 2.5 0 0 1-3.536 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.482 13.768a2.5 2.5 0 0 0 0-3.536l-3.964-3.964a2.5 2.5 0 0 0-3.536 0l-3.964 3.964a2.5 2.5 0 0 0 0 3.536l3.964 3.964a2.5 2.5 0 0 0 3.536 0l3.964-3.964Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledProtocolHandler',
    mixins: [icon]
};
</script>