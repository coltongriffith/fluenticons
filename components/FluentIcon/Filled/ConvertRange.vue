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
<path d="M6.25 3A2.25 2.25 0 0 0 4 5.25v2.5A2.25 2.25 0 0 0 6.25 10h9.5A2.25 2.25 0 0 0 18 7.75v-2.5A2.25 2.25 0 0 0 15.75 3h-9.5ZM17.353 16.445l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 1.133.976l-.073.084-.719.721h1.5a1.25 1.25 0 0 0 1.243-1.122l.007-.128V9.75a.75.75 0 0 1 1.493-.102l.007.102V12a2.75 2.75 0 0 1-2.583 2.745l-.167.005h-1.499l.718.719a.75.75 0 0 1 .073.976Z" :fill="fill" :fill-opacity="opacity" />

<path d="m14.274 12-.787.788-.121.14-.022.029a1.75 1.75 0 0 0 .168 2.28l2.026 2.025.14.121.03.022a1.75 1.75 0 0 0 2.28-.169l.012-.012v2.026a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 4 19.25v-5A2.25 2.25 0 0 1 6.25 12h8.024ZM8 16.75c0 .414.313.75.7.75h4.6c.387 0 .7-.336.7-.75s-.313-.75-.7-.75H8.7c-.387 0-.7.336-.7.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledConvertRange',
    mixins: [icon]
};
</script>