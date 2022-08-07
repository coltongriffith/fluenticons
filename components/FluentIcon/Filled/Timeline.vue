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
<path d="M15.25 13c.966 0 1.75.783 1.75 1.75v4.503a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.253V14.75c0-.967.783-1.75 1.75-1.75h11.5ZM21 14.895v5.355a.75.75 0 0 1-1.494.102l-.006-.102v-5.344a3.003 3.003 0 0 0 1.5-.01Zm-.75-4.803a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816Zm-5.005-7.095c.967 0 1.75.783 1.75 1.75V9.25a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75V4.747a1.75 1.75 0 0 1 1.607-1.745l.143-.005h11.5ZM20.25 3a.75.75 0 0 1 .743.648L21 3.75v5.345a3.004 3.004 0 0 0-1.5-.01V3.75a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTimeline',
    mixins: [icon]
};
</script>