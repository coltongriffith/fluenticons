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
<path d="m21.994 7.996.001 10.253a1.75 1.75 0 0 1-1.75 1.75h-7.248c-.086 0-.172-.007-.255-.019V7.996h9.252Zm-10.752 0v11.983a1.77 1.77 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 18.246V7.996h9.242Zm-.245-3.995c.084 0 .166.006.246.017v2.978H2V5.751c0-.967.783-1.75 1.75-1.75h7.248Zm9.248.002c.967 0 1.75.784 1.75 1.75v1.243H12.74l.001-2.974c.083-.012.169-.019.255-.019h7.248Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenHeader',
    mixins: [icon]
};
</script>