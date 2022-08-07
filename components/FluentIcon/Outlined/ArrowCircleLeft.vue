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
<path d="m12.28 16.532.073-.084a.75.75 0 0 0-.073-.977l-2.72-2.72h6.69l.102-.006A.75.75 0 0 0 17 12l-.006-.101a.75.75 0 0 0-.744-.649H9.56l2.722-2.72.072-.084a.75.75 0 0 0-1.133-.977l-4.001 4-.073.084a.75.75 0 0 0 .073.977l4 4 .085.073a.75.75 0 0 0 .976-.072ZM12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm0 18.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCircleLeft',
    mixins: [icon]
};
</script>