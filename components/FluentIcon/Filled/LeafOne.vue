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
<path d="M11.037 3.048a1.75 1.75 0 0 1 2.2.224l3.712 3.712A6.999 6.999 0 0 1 12.75 18.89v2.359a.75.75 0 1 1-1.5 0V18.89A6.999 6.999 0 0 1 7.051 6.984l3.712-3.712a1.76 1.76 0 0 1 .274-.224ZM12 11a.75.75 0 0 0-.75.75v5.63a5.524 5.524 0 0 0 1.5 0v-5.63A.75.75 0 0 0 12 11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLeafOne',
    mixins: [icon]
};
</script>