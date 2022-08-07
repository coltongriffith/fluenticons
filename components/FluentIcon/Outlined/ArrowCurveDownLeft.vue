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
<path d="M16.401 3.378a.75.75 0 0 0-1.023-.28c-2.269 1.297-3.391 2.954-3.921 4.71-.468 1.553-.463 3.166-.458 4.543l.001.4v5.688l-3.72-3.72a.75.75 0 1 0-1.06 1.061l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06l-3.72 3.72v-6.07c-.004-1.411-.007-2.802.393-4.128.42-1.394 1.298-2.737 3.23-3.84a.75.75 0 0 0 .278-1.024Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCurveDownLeft',
    mixins: [icon]
};
</script>