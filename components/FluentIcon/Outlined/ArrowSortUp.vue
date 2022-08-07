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
<path d="m6.72 8.715 4.494-4.495a.75.75 0 0 1 .976-.073l.085.072 4.504 4.495a.75.75 0 0 1-.975 1.134l-.084-.072-3.223-3.217v12.696a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.743-.648l-.007-.102-.001-12.698L7.78 9.775a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084 4.494-4.495L6.72 8.715Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowSortUp',
    mixins: [icon]
};
</script>