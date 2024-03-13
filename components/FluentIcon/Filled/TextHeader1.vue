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
<path d="M20.182 5.016A1.001 1.001 0 0 1 21 6.032V18a1 1 0 1 1-2 0V9.611a5.664 5.664 0 0 1-2.183 1.338 1 1 0 0 1-.633-1.898c1.129-.376 2.182-1.332 2.858-3.338a.996.996 0 0 1 .278-.446 1 1 0 0 1 .862-.25ZM3 5a1 1 0 0 1 1 1v5h6V6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-5H4v5a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextHeader1',
    mixins: [icon]
};
</script>