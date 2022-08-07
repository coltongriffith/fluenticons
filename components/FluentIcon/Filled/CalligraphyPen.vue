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
<path d="M7.5 2.75a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 0 1.543 1.738L6.527 9.993a3.868 3.868 0 0 0 .119 3.143l3.99 7.95c.149.298.363.535.614.693V12.3a1.5 1.5 0 1 1 1.5 0v9.48c.251-.158.465-.395.615-.692l3.99-7.951c.481-.96.526-2.137.118-3.143l-1.016-2.505A1.75 1.75 0 0 0 18 5.75v-3a.75.75 0 0 0-1.5 0v3a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalligraphyPen',
    mixins: [icon]
};
</script>