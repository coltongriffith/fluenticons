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
<path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3h-13Zm11.03 8.72a.75.75 0 0 1 .073.977l-.073.084-4 4a.75.75 0 0 1-.977.073l-.084-.072-4-4.002a.75.75 0 0 1 .976-1.133l.085.073 2.72 2.722V7.75a.75.75 0 0 1 .648-.743L12 7a.75.75 0 0 1 .743.648l.007.102v6.69l2.72-2.72a.75.75 0 0 1 .976-.072l.084.072Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowSquareDown',
    mixins: [icon]
};
</script>