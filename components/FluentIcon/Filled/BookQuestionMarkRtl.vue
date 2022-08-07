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
<path d="M4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5A2.5 2.5 0 0 0 4 4.5Zm10.5 4.25a.75.75 0 0 1-.75-.733v-.005a.722.722 0 0 0-.134-.33c-.109-.147-.418-.449-1.353-.432-.55.01-.957.236-1.179.511a.92.92 0 0 0-.138.96c.117.292.375.44.917.68l.038.016c.221.098.536.236.786.436.311.25.563.624.563 1.147v.75a.75.75 0 1 1-1.5-.001v-.724l-.001-.001c-.08-.064-.214-.128-.492-.251l-.051-.023c-.47-.207-1.29-.566-1.652-1.472a2.419 2.419 0 0 1 .362-2.458c.528-.655 1.371-1.054 2.321-1.07 1.315-.023 2.13.426 2.585 1.039a2.224 2.224 0 0 1 .42 1.067 1.603 1.603 0 0 1 .008.134v.008s0 .752-.75.752Zm-3 5.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBookQuestionMarkRtl',
    mixins: [icon]
};
</script>