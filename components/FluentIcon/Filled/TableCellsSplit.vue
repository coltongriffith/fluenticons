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
<path d="M6.25 3H11v4H3v-.75A3.25 3.25 0 0 1 6.25 3ZM21 7v-.75A3.25 3.25 0 0 0 17.75 3H12.5v4H21ZM12.5 21h5.25A3.25 3.25 0 0 0 21 17.75V17h-8.5v4ZM3 8.5v7h18v-7H3Zm9.5 1.5v4H11v-4h1.5ZM3 17.75V17h8v4H6.25A3.25 3.25 0 0 1 3 17.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableCellsSplit',
    mixins: [icon]
};
</script>