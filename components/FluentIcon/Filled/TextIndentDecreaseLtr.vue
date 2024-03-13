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
<path d="M9 16h8.5a1 1 0 0 1 .117 1.993L17.5 18H9a1 1 0 0 1-.117-1.993L9 16h8.5H9Zm-6.707-4.707 2-2a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l1.293 1.293a1 1 0 0 1-1.32 1.497l-.094-.083-2-2a1 1 0 0 1-.083-1.32l.083-.094 2-2-2 2ZM9 11l11.5-.001a1 1 0 0 1 .117 1.993L20.5 13 9 13a1 1 0 0 1-.117-1.993L9 11l11.5-.001L9 11Zm0-5h8.5a1 1 0 0 1 .117 1.993L17.5 8H9a1 1 0 0 1-.117-1.993L9 6h8.5H9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextIndentDecreaseLtr',
    mixins: [icon]
};
</script>