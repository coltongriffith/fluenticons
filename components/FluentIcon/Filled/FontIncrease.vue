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
<path d="M16.625 5.78a1 1 0 0 1-1.25-1.56l2.5-2a1 1 0 0 1 1.25 0l2.5 2a1 1 0 0 1-1.25 1.56L18.5 4.28l-1.875 1.5Zm-3.706-1.174a1 1 0 0 0-1.838 0l-6 14a1 1 0 0 0 1.838.788L8.803 15h6.395l1.883 4.394a1 1 0 0 0 1.838-.788l-6-14ZM12 7.54l2.34 5.46H9.66L12 7.54Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFontIncrease',
    mixins: [icon]
};
</script>