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
<path d="M8.707 7.084c-1.02-.407-2.03.604-1.624 1.624l1.606 4.028a4.75 4.75 0 0 0 2.541 2.607l4.325 1.854c1.038.445 2.086-.604 1.642-1.641l-1.854-4.326a4.75 4.75 0 0 0-2.607-2.541L8.707 7.084Zm1.375 5.096-1.39-3.488 3.488 1.39a3.25 3.25 0 0 1 1.784 1.74l1.608 3.75-3.751-1.607a3.25 3.25 0 0 1-1.739-1.785Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-7.75 9h-.692A8.504 8.504 0 0 1 11 3.558v.692a.75.75 0 0 0 1.5 0v-.736A8.502 8.502 0 0 1 20.442 11h-.692a.75.75 0 0 0 0 1.5h.735a8.501 8.501 0 0 1-7.985 7.985v-.735a.75.75 0 0 0-1.5 0v.692A8.502 8.502 0 0 1 3.514 12.5h.736a.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCompassNorthwest',
    mixins: [icon]
};
</script>