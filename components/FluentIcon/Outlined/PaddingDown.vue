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
<path d="M4.5 2.75c0 .414.336.75.75.75h13a.75.75 0 0 0 0-1.5h-13a.75.75 0 0 0-.75.75Zm0 18.5c0 .414.336.75.75.75h.867a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0-.75.75Zm3.467 0c0 .414.335.75.75.75h1.733a.75.75 0 0 0 0-1.5H8.717a.75.75 0 0 0-.75.75Zm4.333 0c0 .414.336.75.75.75h1.733a.75.75 0 0 0 0-1.5H13.05a.75.75 0 0 0-.75.75Zm4.333 0c0 .414.336.75.75.75h.867a.75.75 0 0 0 0-1.5h-.867a.75.75 0 0 0-.75.75Zm-4.353-2.47a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 16.44V5.75a.75.75 0 0 1 1.5 0v10.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPaddingDown',
    mixins: [icon]
};
</script>