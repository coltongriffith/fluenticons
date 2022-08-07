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
<path d="M7.002 7.7A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 0 1.5H8.452l-.142 2.127 1.286-.184a3.42 3.42 0 1 1 .483 6.807h-.355a3.776 3.776 0 0 1-2.796-1.24l-.234-.256a.75.75 0 0 1 1.112-1.008l.233.257a2.275 2.275 0 0 0 1.685.747h.355a1.92 1.92 0 1 0-.271-3.822l-2.202.314a.75.75 0 0 1-.854-.792l.25-3.75Zm7.218 4.52a.75.75 0 0 1 1.06 0l1.22 1.22 1.22-1.22a.75.75 0 0 1 1.06 1.06l-1.22 1.22 1.22 1.22a.75.75 0 1 1-1.06 1.06l-1.22-1.22-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06ZM4.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMultiplier5x',
    mixins: [icon]
};
</script>