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
<path d="M20.253 4.003c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-7.248c-.087 0-.172-.006-.256-.018V4.022c.084-.012.17-.019.256-.019h7.248Zm-9.248-.002c.083 0 .165.006.245.017V19.98c-.08.011-.162.017-.245.017H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.784-1.75 1.75-1.75h7.248ZM9.25 15.5H7.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007H9.25l.102-.007a.75.75 0 0 0 0-1.486L9.25 15.5Zm6.996 0h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreen',
    mixins: [icon]
};
</script>