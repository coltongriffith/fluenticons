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
<path d="M6 4a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1ZM13 9a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1ZM7 18h14a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2ZM13 14a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1ZM11 11.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2 0a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextCollapse',
    mixins: [icon]
};
</script>