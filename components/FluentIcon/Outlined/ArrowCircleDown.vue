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
<path d="m16.53 11.72-.084-.074a.75.75 0 0 0-.977.073l-2.72 2.72v-6.69l-.007-.102A.75.75 0 0 0 12 6.999l-.101.007a.75.75 0 0 0-.649.743v6.692l-2.72-2.722-.084-.073a.75.75 0 0 0-.977 1.133l4 4.002.084.072a.75.75 0 0 0 .977-.072l4-4.001.073-.084a.75.75 0 0 0-.072-.977ZM1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10Zm18.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCircleDown',
    mixins: [icon]
};
</script>