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
<path d="M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0ZM16 5.25C16 4.007 15.105 3 14 3h-4C8.895 3 8 4.007 8 5.25V8h8V5.25ZM8 14.5v-5h8v5H8ZM8 16v2.75c0 1.243.895 2.25 2 2.25h4c1.105 0 2-1.007 2-2.25V16H8ZM21 20.25V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableInsertColumn',
    mixins: [icon]
};
</script>