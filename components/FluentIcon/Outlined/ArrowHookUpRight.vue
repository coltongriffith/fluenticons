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
<path d="M10.5 18.5h5.75a.75.75 0 0 1 0 1.5H10.5a6.5 6.5 0 1 1 0-13h5.95l-2.616-2.617a.75.75 0 0 1 1.06-1.06l3.882 3.882c.1.1.166.22.198.348a.75.75 0 0 1-.205.739l-3.88 3.88a.75.75 0 1 1-1.06-1.061l2.61-2.611H10.5a5 5 0 0 0 0 10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowHookUpRight',
    mixins: [icon]
};
</script>