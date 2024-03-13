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
<path d="M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h6.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285A3.75 3.75 0 0 1 14.25 13H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2 3.5 3.5 0 0 1 11 5.5Zm-3.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBranchFork',
    mixins: [icon]
};
</script>