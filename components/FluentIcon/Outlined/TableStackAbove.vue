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
<path d="M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5ZM20.25 8.5a.75.75 0 0 1 .75.75v8.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-8.5a.75.75 0 0 1 .75-.75h16.5ZM14 10h-4v4h4v-4Zm-5.5 0h-4v4h4v-4Zm0 5.5h-4v2.25c0 .966.784 1.75 1.75 1.75H8.5v-4Zm5.5 0h-4v4h4v-4Zm1.5 4h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4v4Zm4-9.5h-4v4h4v-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableStackAbove',
    mixins: [icon]
};
</script>