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
<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25v4.982a4.465 4.465 0 0 0-2.986.728 4.468 4.468 0 0 0-5.645 6.87l3.17 3.17H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Zm3.264 19.25a.747.747 0 0 1-.53-.22l-4.408-4.408a3.467 3.467 0 1 1 4.902-4.903l.036.036.036-.036a3.467 3.467 0 1 1 4.903 4.903l-4.408 4.408a.748.748 0 0 1-.53.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardHeart',
    mixins: [icon]
};
</script>