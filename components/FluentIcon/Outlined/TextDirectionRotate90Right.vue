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
<path d="M6.75 3a.75.75 0 0 0-.75.75v14.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.75A.75.75 0 0 0 6.75 3Zm4.28.053 9.496 3.753c.595.236.63 1.043.104 1.345l-.105.05-9.5 3.747a.75.75 0 0 1-.643-1.352l.092-.043L13 9.556V5.443l-2.52-.995a.75.75 0 0 1-.454-.876l.031-.097a.75.75 0 0 1 .876-.453l.098.03Zm7.178 4.45L14.5 6.036v2.928l3.708-1.461ZM15.5 12.75a.75.75 0 0 1 1.5 0v5.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-5.69Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextDirectionRotate90Right',
    mixins: [icon]
};
</script>