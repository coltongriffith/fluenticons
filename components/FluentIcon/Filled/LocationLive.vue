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
<path d="M9 2.725a.75.75 0 0 1 .799-.699c5.992.394 10.782 5.185 11.175 11.179a.75.75 0 0 1-1.497.098c-.343-5.242-4.535-9.435-9.777-9.78a.75.75 0 0 1-.7-.798ZM7.588 21.386l.388.386a.75.75 0 0 0 1.057 0l1.346-1.337c.728-.723 1.568-1.559 2.012-2.003a5.496 5.496 0 1 0-7.773 0 1162.268 1162.268 0 0 0 2.97 2.954ZM8.5 15.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9.818 5.503a.75.75 0 1 0-.134 1.494 6.987 6.987 0 0 1 6.319 6.316.75.75 0 1 0 1.494-.135 8.487 8.487 0 0 0-7.679-7.675Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLocationLive',
    mixins: [icon]
};
</script>