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
<path d="M4.75 2a1 1 0 1 0 0 2H8L3.95 9.4a1 1 0 0 0 .8 1.6H10a1 1 0 1 0 0-2H6.75l4.05-5.4A1 1 0 0 0 10 2H4.75Zm2.284 10a1 1 0 0 1 .945.673l2.794 8.069a1 1 0 0 1-1.89.654l-.412-1.189H5.598l-.412 1.19a1 1 0 0 1-1.89-.655l2.793-8.07A1 1 0 0 1 7.034 12Zm0 4.057-.744 2.15h1.488l-.744-2.15Zm5.26.236a1 1 0 0 1 1.413 0L16 18.586V3a1 1 0 1 1 2 0v15.586l2.294-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.415 0l-4-4a1 1 0 0 1 0-1.414Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextSortDescending',
    mixins: [icon]
};
</script>