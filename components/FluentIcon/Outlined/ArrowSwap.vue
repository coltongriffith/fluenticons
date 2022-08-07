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
<path d="m14.783 2.22 4.495 4.494a.75.75 0 0 1 .073.976l-.072.085-4.495 4.504a.75.75 0 0 1-1.135-.975l.073-.084 3.217-3.223H5.243A.75.75 0 0 1 4.5 7.35l-.007-.101a.75.75 0 0 1 .648-.743l.102-.007 11.697-.001-3.218-3.217a.75.75 0 0 1-.072-.976l.072-.084a.75.75 0 0 1 .977-.073l.084.073 4.495 4.494-4.495-4.494ZM19.5 16.65l.006.1a.75.75 0 0 1-.648.744l-.102.007L7.063 17.5l3.22 3.22a.75.75 0 0 1 .074.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.072-4.5-4.497a.75.75 0 0 1-.073-.976l.073-.084 4.5-4.504a.75.75 0 0 1 1.134.976l-.073.084L7.066 16h11.692a.75.75 0 0 1 .743.65l.006.1-.006-.1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowSwap',
    mixins: [icon]
};
</script>