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
<path d="M6.75 6a1 1 0 0 1 1 1v11.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.32.083l-.094-.083-3-3a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.292V7a1 1 0 0 1 1-1Zm10.498 0a1 1 0 0 1 1 1v11.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.32.083l-.094-.083-3-3a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.293V7a1 1 0 0 1 1-1ZM6.75 2a4.75 4.75 0 0 1 2 9.06l.001-1.749a3.25 3.25 0 1 0-4.001 0v1.749a4.75 4.75 0 0 1 2-9.06Zm10.498 0a4.75 4.75 0 0 1 2 9.06V9.31a3.25 3.25 0 1 0-4.001 0l.001 1.749a4.75 4.75 0 0 1 2-9.06Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDoubleSwipeDown',
    mixins: [icon]
};
</script>