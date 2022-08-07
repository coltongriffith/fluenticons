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
<path d="m15.207 2.292 4 3.995a1 1 0 0 1 .084 1.32l-.083.094-4 4.006a1 1 0 0 1-1.498-1.32l.083-.094L16.083 8H5.5a1 1 0 0 1-.994-.883L4.5 7a1 1 0 0 1 .883-.993L5.5 6h10.59l-2.296-2.293a1 1 0 0 1-.084-1.32l.083-.095a1 1 0 0 1 1.32-.084l.094.084 4 3.995-4-3.995Zm4.283 14.591.007.117a1 1 0 0 1-.883.993l-.117.007H7.913l2.294 2.293a1 1 0 0 1 .084 1.32l-.083.094a1 1 0 0 1-1.32.084l-.095-.084-4-3.996a1 1 0 0 1-.083-1.32l.083-.094 4-4.004a1 1 0 0 1 1.498 1.32l-.083.094L7.918 16h10.579a1 1 0 0 1 .993.883l.007.117-.007-.117Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowSwap',
    mixins: [icon]
};
</script>