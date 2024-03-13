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
<path d="M11 17.5a6.503 6.503 0 0 1 5-6.326V8.25A3.25 3.25 0 0 0 12.75 5h-7.5A3.25 3.25 0 0 0 2 8.25v8.5A3.25 3.25 0 0 0 5.25 20h6.248A6.48 6.48 0 0 1 11 17.5Zm6.5-6.5c1.747 0 3.332.689 4.5 1.81V7.04a1 1 0 0 0-1.648-.762L17 9.128v1.89a6.62 6.62 0 0 1 .5-.018Zm5.5 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .834.255 1.608.691 2.248l5.557-5.557A4 4 0 0 0 13.5 17.5Zm4 4a4 4 0 0 0 3.309-6.248l-5.557 5.557c.64.436 1.414.691 2.248.691Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoProhibited',
    mixins: [icon]
};
</script>