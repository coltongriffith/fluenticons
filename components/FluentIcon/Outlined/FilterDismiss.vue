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
<path d="M23 7.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.708L16.793 7.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 7.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 6.793l-1.646-1.647ZM13.346 12.5a6.536 6.536 0 0 1-1.324-1.5H7.5a.75.75 0 0 0 0 1.5h5.846ZM11 7.5c0-.516.06-1.018.174-1.5H4.5a.75.75 0 0 0 0 1.5H11Zm2.5 8.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFilterDismiss',
    mixins: [icon]
};
</script>