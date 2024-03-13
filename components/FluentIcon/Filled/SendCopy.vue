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
<path d="M20.005 11.5a1 1 0 0 1 .993.883l.007.117V17a5.5 5.5 0 0 1-5.279 5.495l-.221.005H8.25a2.5 2.5 0 0 1-2.452-2.012h2.347l.052.009.053.003h7.255a3.5 3.5 0 0 0 3.494-3.296l.006-.192V12.5a1 1 0 0 1 1-1Zm-3.006-2.013a1 1 0 0 1 .993.883l.007.117v6.5a2.5 2.5 0 0 1-2.336 2.495l-.164.006h-10a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6.49a1 1 0 0 1 1.993-.116l.007.116v6.49a.5.5 0 0 0 .41.492l.09.008h10a.5.5 0 0 0 .492-.41l.008-.09v-6.501a1 1 0 0 1 1-1ZM6.293 5.793l3.497-3.5a1 1 0 0 1 1.32-.084l.095.084 3.502 3.5a1 1 0 0 1-1.32 1.497l-.094-.083L11.5 5.415v8.84a1 1 0 0 1-.883.993l-.117.007a1 1 0 0 1-.993-.883l-.007-.117V5.412L7.707 7.207a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 3.497-3.5-3.497 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSendCopy',
    mixins: [icon]
};
</script>