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
<path d="M10 8.29v1.585A5.502 5.502 0 0 0 12 20.5a5.5 5.5 0 0 0 2.21-10.538L14 9.875l.001-1.585a7 7 0 1 1-4.247.078L10 8.29Zm0 2.678v1.796a3 3 0 1 0 4.138.132l-.137-.131v-1.797a4.5 4.5 0 1 1-4.192.1l.19-.1Zm1.387-8.758a1 1 0 0 1 1.226 0l.094.083 3 3 .083.094a1 1 0 0 1 0 1.226l-.083.094-.094.083a1 1 0 0 1-1.226 0l-.094-.083L13 5.415V15a1 1 0 0 1-1.993.117L11 15V5.415L9.707 6.707l-.094.083A1 1 0 0 1 8.21 5.387l.083-.094 3-3 .094-.083Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledComponent2DoubleTapSwipeUp',
    mixins: [icon]
};
</script>