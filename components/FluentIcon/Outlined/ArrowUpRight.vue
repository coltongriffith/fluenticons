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
<path d="M12.748 3.001h7.554l.1.014.099.028.06.026a.72.72 0 0 1 .219.15l.04.044.061.082.037.065.04.09.018.064.014.064.01.093v7.534a.75.75 0 0 1-1.493.102l-.007-.102V5.559L4.28 20.784a.75.75 0 0 1-.977.073l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L18.439 4.5l-5.69.001a.75.75 0 0 1-.744-.648l-.007-.102a.75.75 0 0 1 .648-.743L12.748 3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowUpRight',
    mixins: [icon]
};
</script>