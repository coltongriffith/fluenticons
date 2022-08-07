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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75a1.25 1.25 0 0 0 1.999 1L13.012 18h3.927l3.78 3.78a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM15.44 16.5h-2.926L7.5 20.25l-.001-3.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.5c0-.468.184-.893.483-1.207L15.439 16.5ZM20.5 14.75a1.75 1.75 0 0 1-.991 1.577l1.093 1.094A3.246 3.246 0 0 0 22 14.75v-8.5A3.25 3.25 0 0 0 18.75 3H6.182l1.5 1.5H18.75c.966 0 1.75.784 1.75 1.75v8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCommentOff',
    mixins: [icon]
};
</script>