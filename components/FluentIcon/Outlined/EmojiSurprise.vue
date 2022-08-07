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
<path d="M12 2.005c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 13a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM9 8.751a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedEmojiSurprise',
    mixins: [icon]
};
</script>