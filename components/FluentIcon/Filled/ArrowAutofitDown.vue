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
<path d="m12.952 18.102.084.098 2.354 2.357c.18.273.505.443.86.443.324 0 .62-.14.806-.368l.005-.007.046-.064 2.358-2.361.085-.098.005-.008a1 1 0 0 0 .01-1.177l-.006-.008-.099-.117-.106-.091-.007-.006a1 1 0 0 0-1.177-.01l-.009.007-.11.093-.801.802V3.897l-.008-.109-.002-.01c-.072-.463-.51-.778-.99-.778s-.918.315-.99.779l-.002.01-.008.108v13.689l-.8-.8-.097-.085-.008-.006a1 1 0 0 0-1.399 1.4l.006.007ZM4 17.508a2.5 2.5 0 0 0 2.5 2.5h4a1 1 0 1 0 0-2h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h6a1 1 0 1 0 0-2h-6a2.5 2.5 0 0 0-2.5 2.5v11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowAutofitDown',
    mixins: [icon]
};
</script>