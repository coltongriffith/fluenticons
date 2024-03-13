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
<path d="M17.34 3.523a2.448 2.448 0 0 0-3.702.278 2.971 2.971 0 0 0-2.622 5.026l1.248 1.248-1.13 1.129 1.685 1.684 1.13-1.129 1.247 1.248a2.971 2.971 0 0 0 5.026-2.623 2.448 2.448 0 0 0 .278-3.701l-.738-.737.646-.647a1.191 1.191 0 0 0-1.685-1.684l-.646.646-.738-.738Zm.427 5.34a.75.75 0 0 1-1.06 0l-1.57-1.57a.75.75 0 1 1 1.06-1.06l1.57 1.57a.75.75 0 0 1 0 1.06ZM4.625 11.017a2.971 2.971 0 0 1 4.201 0l4.18 4.18a2.971 2.971 0 0 1-2.622 5.025 2.448 2.448 0 0 1-3.701.278l-.738-.738-.668.668a1.191 1.191 0 0 1-1.685-1.685l.668-.667-.737-.738A2.448 2.448 0 0 1 3.8 13.64a2.967 2.967 0 0 1 .825-2.622Zm3.724 7.265a.75.75 0 0 0 0-1.06l-1.57-1.57a.75.75 0 0 0-1.06 1.06l1.57 1.57a.75.75 0 0 0 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDumbbell',
    mixins: [icon]
};
</script>