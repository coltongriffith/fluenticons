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
<path d="M4.382 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6.454l-1.316 1.314a3.25 3.25 0 0 1-1.362.813l-4.293 1.288a2 2 0 0 1-2.479-2.528L4.382 14Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18.648 2.944a3.218 3.218 0 0 1-.002 4.551l-7.123 7.111a2.25 2.25 0 0 1-.942.563l-4.294 1.289a1 1 0 0 1-1.239-1.265l1.362-4.228c.11-.34.298-.65.552-.902l7.132-7.122a3.22 3.22 0 0 1 4.554.003Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledColorLine',
    mixins: [icon]
};
</script>