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
<path d="M15.5 3.75a.75.75 0 0 0-.75-.75h-8.5A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h8.5a.75.75 0 0 0 .75-.75V3.75ZM14 10v4h-4v-4h4Zm-9.5 4v-4h4v4h-4ZM14 8.5h-4v-4h4v4Zm-5.5 0h-4V6.25c0-.966.784-1.75 1.75-1.75H8.5v4Zm0 11H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h4v4Zm1.5-4h4v4h-4v-4ZM19.5 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0V3.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableStackRight',
    mixins: [icon]
};
</script>