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
<path d="M21.77 5.79a.75.75 0 1 0-1.04-1.08l-6.75 6.5a.75.75 0 1 0 1.04 1.08l6.75-6.5ZM18.987 5H4.55A2.55 2.55 0 0 0 2 7.55v6.9A2.55 2.55 0 0 0 4.55 17h14.9A2.55 2.55 0 0 0 22 14.45v-6.9c0-.185-.02-.365-.057-.538l-6.23 5.999a1.75 1.75 0 0 1-2.427-2.522L18.986 5ZM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCheck',
    mixins: [icon]
};
</script>