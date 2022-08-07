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
<path d="M18.25 3.509a.75.75 0 1 0 0-1.5l-13-.004a.75.75 0 1 0 0 1.5l13 .004Zm-6.602 18.488.102.007a.75.75 0 0 0 .743-.649l.007-.101-.001-13.685 3.722 3.72a.75.75 0 0 0 .976.072l.085-.072a.75.75 0 0 0 .072-.977l-.073-.084-4.997-4.996a.75.75 0 0 0-.976-.073l-.085.072-5.003 4.997a.75.75 0 0 0 .976 1.134l.084-.073 3.719-3.713L11 21.254c0 .38.282.693.648.743Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowUpload',
    mixins: [icon]
};
</script>