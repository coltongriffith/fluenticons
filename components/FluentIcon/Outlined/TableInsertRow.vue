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
<path d="M20.25 3H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5ZM3 9.75A2.25 2.25 0 0 1 5.25 7.5h13.5A2.25 2.25 0 0 1 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 14.25v-4.5ZM5.25 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75H8.5V9H5.25ZM14 15V9h-4v6h4Zm1.5 0h3.25a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H15.5v6ZM3.75 19.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableInsertRow',
    mixins: [icon]
};
</script>