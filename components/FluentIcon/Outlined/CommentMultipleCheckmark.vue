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
<path d="M5.009 5.009A3.25 3.25 0 0 1 8.25 2h9A4.75 4.75 0 0 1 22 6.75v6.06a6.519 6.519 0 0 0-1.5-1.078V6.75a3.25 3.25 0 0 0-3.25-3.25h-9A1.75 1.75 0 0 0 6.518 5h9.232A3.25 3.25 0 0 1 19 8.25v2.924A6.52 6.52 0 0 0 17.5 11V8.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 8.25v7.5c0 .966.784 1.75 1.75 1.75H6.5v2.75l3.667-2.75H11c0 .516.06 1.018.174 1.5h-.507L7 21.75c-.824.618-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3.009-3.241ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-2.146-2.354a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.646-3.647a.5.5 0 0 1 .708 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCommentMultipleCheckmark',
    mixins: [icon]
};
</script>