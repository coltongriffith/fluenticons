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
<path d="M12 3a9 9 0 1 1-8.963 8.183 1 1 0 1 1 1.992.18A6.962 6.962 0 0 0 7.05 16.95c.375.375.792.707 1.242.988A7 7 0 1 0 7.098 7.002l1.4.001a1 1 0 0 1 .116 1.994l-.116.006H4.496a1 1 0 0 1-.993-.883l-.007-.117v-4a1 1 0 0 1 1.994-.116l.006.117v1.774A8.983 8.983 0 0 1 12 3Zm-.75 4a.75.75 0 0 1 .743.648L12 7.75V12h2.25a.75.75 0 0 1 .102 1.493l-.102.007h-3a.75.75 0 0 1-.743-.648l-.007-.102v-5a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHistory',
    mixins: [icon]
};
</script>