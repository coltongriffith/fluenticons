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
<path d="M4.38 14.003A2.5 2.5 0 0 0 2 16.5v3A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-5.954l-1.316 1.314a3.237 3.237 0 0 1-.203.186H19.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3a1 1 0 0 1 .504-.869 2 2 0 0 1 .092-.744l.285-.884Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18.648 2.944a3.218 3.218 0 0 1-.002 4.551l-7.123 7.111a2.25 2.25 0 0 1-.942.563l-4.294 1.289a1 1 0 0 1-1.239-1.265l1.362-4.228c.11-.34.298-.65.552-.902l7.132-7.122a3.22 3.22 0 0 1 4.554.003Zm-3.494 1.059-7.133 7.121a.75.75 0 0 0-.184.301l-1.07 3.322 3.382-1.015a.75.75 0 0 0 .315-.187l7.121-7.11a1.718 1.718 0 1 0-2.43-2.432Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedColorLine',
    mixins: [icon]
};
</script>