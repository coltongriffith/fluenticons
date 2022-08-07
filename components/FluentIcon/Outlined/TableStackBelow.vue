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
<path d="M3.75 15.5a.75.75 0 0 1-.75-.75v-8.5A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v8.5a.75.75 0 0 1-.75.75H3.75ZM10 14h4v-4h-4v4Zm0-5.5h4v-4h-4v4Zm5.5 5.5h4v-4h-4v4Zm0-5.5h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5v4Zm-7-4H6.25A1.75 1.75 0 0 0 4.5 6.25V8.5h4v-4Zm-4 9.5h4v-4h-4v4ZM3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableStackBelow',
    mixins: [icon]
};
</script>