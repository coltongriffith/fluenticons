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
<path d="M12.5 21h5.25A3.25 3.25 0 0 0 21 17.75V17h-8.5v4ZM21 7v-.75A3.25 3.25 0 0 0 17.75 3H12.5v4H21ZM11 3H6.25A3.25 3.25 0 0 0 3 6.25V7h8V3ZM3 8.5v7h18v-7H3ZM3 17v.75A3.25 3.25 0 0 0 6.25 21H11v-4H3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableCellsMerge',
    mixins: [icon]
};
</script>