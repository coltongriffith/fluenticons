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
<path d="M10 7.75a.75.75 0 0 0-1.39-.39l-.006.009a8.265 8.265 0 0 1-.598.8c-.402.473-.966 1.033-1.642 1.438a.75.75 0 1 0 .772 1.286A7.655 7.655 0 0 0 8.5 9.833v6.417a.75.75 0 0 0 1.5 0v-8.5Zm3.28 4.47a.75.75 0 0 0-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 0 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22-1.22-1.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMultiplier1x',
    mixins: [icon]
};
</script>