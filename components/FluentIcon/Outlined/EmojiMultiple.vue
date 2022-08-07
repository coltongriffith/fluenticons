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
<path d="M8.5 2a6.503 6.503 0 0 1 6.312 4.943c-.515.01-1.02.068-1.506.171a5 5 0 1 0-6.191 6.191 8.053 8.053 0 0 0-.172 1.507A6.5 6.5 0 0 1 8.5 2Zm.16 8.006c.355-.451.759-.864 1.202-1.23a3.5 3.5 0 0 0-4.022.95.75.75 0 1 0 1.14.974 2 2 0 0 1 1.68-.694ZM7.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5.458 2.042a.75.75 0 0 1 .082 1.058 4 4 0 0 1-6.075.005.75.75 0 0 1 1.138-.977 2.499 2.499 0 0 0 3.797-.003.75.75 0 0 1 1.058-.083ZM17.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEmojiMultiple',
    mixins: [icon]
};
</script>