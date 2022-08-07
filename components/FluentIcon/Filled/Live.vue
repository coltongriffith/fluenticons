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
<path d="M6.343 4.938a1 1 0 0 1 0 1.415 8.003 8.003 0 0 0 0 11.317 1 1 0 1 1-1.415 1.414c-3.906-3.906-3.906-10.24 0-14.146a1 1 0 0 1 1.415 0Zm12.731 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.414-1.414 8.003 8.003 0 0 0 0-11.317 1 1 0 0 1 1.414-1.415ZM9.31 7.812a1 1 0 0 1 0 1.414 3.92 3.92 0 0 0 0 5.544 1 1 0 1 1-1.414 1.414 5.92 5.92 0 0 1 0-8.372 1 1 0 0 1 1.414 0Zm6.959 0a5.92 5.92 0 0 1 0 8.372 1 1 0 0 1-1.415-1.414 3.92 3.92 0 0 0 0-5.544 1 1 0 0 1 1.415-1.414Zm-4.187 2.77a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLive',
    mixins: [icon]
};
</script>