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
<path d="m11.5 3.002-7.555.001-.121.014-.088.02-.104.034-.089.04-.064.036-.062.042-.064.05-.063.058-.095.11-.071.11-.054.114-.035.105-.016.065-.009.053-.011.148v7.504a1 1 0 0 0 1.993.117L5 11.505v-5.09l14.292 14.292a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 .084-1.32l-.084-.095L6.415 5.002H11.5a1 1 0 0 0 .993-.883l.007-.117a1 1 0 0 0-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowUpLeft',
    mixins: [icon]
};
</script>