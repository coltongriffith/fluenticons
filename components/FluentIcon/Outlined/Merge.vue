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
<path d="M3 6.75A.75.75 0 0 1 3.75 6h4.5a.75.75 0 0 1 .53.22L13.56 11h5.878L15.72 7.28a.75.75 0 1 1 1.06-1.06l4.998 5a.75.75 0 0 1 0 1.06l-4.998 5a.75.75 0 1 1-1.06-1.06l3.718-3.72H13.56l-4.78 4.78a.75.75 0 0 1-.531.22h-4.5a.75.75 0 0 1 0-1.5h4.19l4.25-4.25L7.94 7.5H3.75A.75.75 0 0 1 3 6.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMerge',
    mixins: [icon]
};
</script>