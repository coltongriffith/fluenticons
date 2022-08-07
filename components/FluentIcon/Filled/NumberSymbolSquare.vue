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
<path d="m13.436 11-.4 2h-2.47l.4-2h2.47ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25Zm4.648 4.515a.75.75 0 0 1 .588.882l-.22 1.103h2.47l.28-1.397a.75.75 0 0 1 1.47.294l-.22 1.103h.984a.75.75 0 0 1 0 1.5h-1.285l-.4 2h1.185a.75.75 0 0 1 0 1.5h-1.485l-.28 1.398a.75.75 0 0 1-1.47-.295l.22-1.103h-2.47l-.28 1.398a.75.75 0 0 1-1.47-.295l.22-1.103H7.75a.75.75 0 0 1 0-1.5h1.286l.4-2H8.25a.75.75 0 0 1 0-1.5h1.486l.28-1.397a.75.75 0 0 1 .882-.588Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledNumberSymbolSquare',
    mixins: [icon]
};
</script>