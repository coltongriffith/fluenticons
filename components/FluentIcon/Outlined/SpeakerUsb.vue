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
<path d="M12.92 3.316c.806-.717 2.08-.145 2.08.934v15.496c0 1.078-1.274 1.65-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.247V9.75a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19l4.491-3.993Zm.58 1.49L9.425 8.43A2.25 2.25 0 0 1 7.93 9H4.25a.75.75 0 0 0-.75.75v4.497c0 .415.336.75.75.75h3.68a2.25 2.25 0 0 1 1.495.57l4.075 3.623V4.807ZM16.499 8.25a.75.75 0 0 1 .75-.75h3.503a.75.75 0 0 1 .75.75v1.797a.75.75 0 0 1 .498.707v5a.75.75 0 0 1-.75.75h-.236v2.746a.75.75 0 0 1-1.5 0v-2.747h-.982v2.747a.75.75 0 0 1-1.5 0v-2.747h-.282a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .499-.707V8.25Zm4.001 3.254h-3v3.5h3v-3.5ZM17.999 9v1h2.003V9h-2.003Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSpeakerUsb',
    mixins: [icon]
};
</script>