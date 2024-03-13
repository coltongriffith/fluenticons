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
<path d="M3 8.5v9.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H8.5v5.5H3ZM8.5 10v4h-4v-4h4Zm1.5 4v-4h4v4h-4Zm5.5 0v-4h4v4h-4ZM10 15.5h4v4h-4v-4Zm5.5 0h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5v-4Zm0-11h2.25c.966 0 1.75.784 1.75 1.75V8.5h-4v-4Zm-1.5 4h-4v-4h4v4Zm-5.5 7v4H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPuzzleCube',
    mixins: [icon]
};
</script>