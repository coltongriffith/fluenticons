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
<path d="M6 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H6ZM10.354 13.701l.099.085.799.8v-1.957l-.002-.026V9.414l-.8.8-.097.085-.008.006a1 1 0 0 1-1.399-1.4l.006-.007.084-.098 2.354-2.357c.18-.273.505-.443.86-.443.324 0 .62.14.806.368l.005.007.046.064L15.465 8.8l.085.098.005.008a1 1 0 0 1 .01 1.177l-.006.008-.099.117-.106.091-.007.006a1 1 0 0 1-1.177.01l-.009-.007-.11-.093-.801-.801v1.957l.002.026v3.19l.794-.795a1 1 0 0 1 1.303-.097l.007.006.098.085.007.006a1 1 0 0 1 .096 1.302l-.005.008-.085.098-2.354 2.356a1.023 1.023 0 0 1-.86.444c-.356 0-.681-.17-.86-.443l-2.348-2.35a1 1 0 0 1 1.302-1.512l.008.006ZM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAutoFitHeight',
    mixins: [icon]
};
</script>