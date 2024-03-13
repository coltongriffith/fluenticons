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
<path d="m11.25 13.75-.085-.073a.75.75 0 0 0-.976.072l-.69.69v-6.69l-.007-.102a.75.75 0 0 0-.743-.648l-.102.007A.75.75 0 0 0 8 7.749v6.692l-.69-.692-.084-.072a.75.75 0 0 0-.976 1.133l1.969 1.97.084.073a.75.75 0 0 0 .977-.072l1.97-1.971.073-.084a.75.75 0 0 0-.072-.977ZM1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10Zm18.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-2.75 1.75-.084-.073a.75.75 0 0 0-.976.072l-.69.69v-6.69l-.007-.102a.75.75 0 0 0-.743-.648l-.102.007a.75.75 0 0 0-.648.743v6.691l-.69-.69-.083-.073a.75.75 0 0 0-.977 1.133l1.969 1.97.084.073a.75.75 0 0 0 .977-.072l1.97-1.971.073-.084a.75.75 0 0 0-.072-.977Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCircleDownDouble',
    mixins: [icon]
};
</script>