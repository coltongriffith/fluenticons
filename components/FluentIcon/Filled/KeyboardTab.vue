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
<path d="m18.207 11.293-6.5-6.5a1 1 0 0 0-1.497 1.32l.083.094L15.086 11H4a1 1 0 0 0-.993.883L3 12a1 1 0 0 0 .883.993L4 13h11.086l-4.793 4.793a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.083l.094-.083 6.5-6.5a1 1 0 0 0 .083-1.32l-.083-.094-6.5-6.5 6.5 6.5ZM21 18.5v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledKeyboardTab',
    mixins: [icon]
};
</script>