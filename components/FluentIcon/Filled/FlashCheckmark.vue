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
<path d="M6.527 21.068 8.294 14H5.75a.75.75 0 0 1-.72-.956l3-10.5A.75.75 0 0 1 8.75 2h7a.75.75 0 0 1 .712.987L14.79 8h4.46a.75.75 0 0 1 .54 1.27l-1.687 1.758a6.5 6.5 0 0 0-7.046 7.342l-3.262 3.4c-.532.554-1.455.044-1.269-.702ZM17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm3.354-7.146-4 4a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.708l1.646 1.647 3.646-3.647a.5.5 0 0 1 .708.708Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlashCheckmark',
    mixins: [icon]
};
</script>