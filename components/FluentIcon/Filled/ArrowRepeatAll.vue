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
<path d="m14.712 2.289-.087-.078a1 1 0 0 0-1.327.078l-.078.087a.999.999 0 0 0 .078 1.326l1.299 1.297H8.999l-.24.004A6.997 6.997 0 0 0 2 11.993c0 1.445.438 2.788 1.189 3.899a.999.999 0 0 0 1.626-1.163l-.135-.218A4.997 4.997 0 0 1 9 6.998h5.595l-1.297 1.297-.078.087a.999.999 0 0 0 1.492 1.326l3.006-3.003.077-.087a.999.999 0 0 0-.078-1.326l-3.005-3.003Zm6.075 5.771A.999.999 0 0 0 19 8.677c0 .209.064.402.172.561a4.997 4.997 0 0 1-4.17 7.75H9.414l1.294-1.29.083-.096a1 1 0 0 0-.006-1.23l-.077-.088-.095-.084a1.001 1.001 0 0 0-1.232.006l-.088.078-3.005 3.003-.083.095a1 1 0 0 0 .006 1.231l.077.087 3.005 3.003.095.084a1 1 0 0 0 1.397-1.41l-.077-.087-1.304-1.303h5.596l.24-.003a6.997 6.997 0 0 0 5.546-10.927v.003Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowRepeatAll',
    mixins: [icon]
};
</script>