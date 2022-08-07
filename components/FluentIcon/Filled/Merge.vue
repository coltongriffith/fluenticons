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
<path d="M7.586 8.004H4a1 1 0 0 1 0-2h4a1 1 0 0 1 .707.293L13.414 11h5.17l-3.29-3.289a1 1 0 0 1 1.413-1.414l5 4.996a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13h-5.172l-4.707 4.707A1 1 0 0 1 8 18H4a1 1 0 0 1 0-2h3.586l4-4-4-3.996Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMerge',
    mixins: [icon]
};
</script>