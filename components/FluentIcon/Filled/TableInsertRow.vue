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
<path d="M20.25 4.5H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM8 8H5.25C4.007 8 3 8.895 3 10v4c0 1.105 1.007 2 2.25 2H8V8ZM9.5 16h5V8h-5v8ZM18.75 16H16V8h2.75c1.243 0 2.25.895 2.25 2v4c0 1.105-1.007 2-2.25 2ZM3.75 21h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableInsertRow',
    mixins: [icon]
};
</script>