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
<path d="M20 6.414V10a1 1 0 1 1-2 0V6.414l-.293.293a1 1 0 1 1-1.414-1.414l2-2a.998.998 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 6.414ZM2 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3ZM20 14v3.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V14a1 1 0 1 1 2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextLineSpacing',
    mixins: [icon]
};
</script>