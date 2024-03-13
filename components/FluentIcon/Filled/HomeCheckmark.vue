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
<path d="M10.537 2.534a2.25 2.25 0 0 1 2.903-.002L20.2 8.23c.507.427.8 1.057.8 1.72v9.799a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-9.8c0-.662.292-1.29.797-1.718l6.74-5.698Zm5.247 9.243a.75.75 0 1 0-1.061-1.06l-3.973 3.972-1.47-1.47a.75.75 0 1 0-1.06 1.061l2 2a.75.75 0 0 0 1.06 0l4.504-4.503Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHomeCheckmark',
    mixins: [icon]
};
</script>