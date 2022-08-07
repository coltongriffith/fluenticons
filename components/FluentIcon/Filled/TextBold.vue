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
<path d="M6 5.75C6 4.784 6.784 4 7.75 4h4.749c2.823 0 4.751 2.34 4.751 4.75 0 .931-.288 1.852-.803 2.632C17.369 12.239 18 13.47 18 15c0 3.133-2.677 5-5 5H7.75A1.75 1.75 0 0 1 6 18.25V5.75Zm3.5 7.75v3H13c.312 0 .71-.138 1.024-.421.288-.26.476-.615.476-1.079 0-.888-.745-1.5-1.5-1.5H9.5Zm0-3.5h3c.715 0 1.25-.592 1.25-1.25 0-.657-.536-1.25-1.251-1.25H9.5V10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextBold',
    mixins: [icon]
};
</script>