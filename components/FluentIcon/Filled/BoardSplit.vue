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
<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25V11h11V3H6.25ZM3 17.75V12.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75ZM15.5 16v5h2.25A3.25 3.25 0 0 0 21 17.75V16h-5.5Zm5.5-1.5v-5h-5.5v5H21ZM21 8h-5.5V3h2.25A3.25 3.25 0 0 1 21 6.25V8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBoardSplit',
    mixins: [icon]
};
</script>