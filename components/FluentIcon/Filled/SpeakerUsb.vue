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
<path d="M15 4.249a1.25 1.25 0 0 0-2.057-.955L7.975 7.498H4.25A2.25 2.25 0 0 0 2 9.748v4.5a2.25 2.25 0 0 0 2.25 2.25h3.725l4.967 4.206A1.25 1.25 0 0 0 15 19.75V4.25ZM16.499 8.25a.75.75 0 0 1 .75-.75h3.503a.75.75 0 0 1 .75.75v1.797a.75.75 0 0 1 .498.707v5a.75.75 0 0 1-.75.75h-.236v2.746a.75.75 0 0 1-1.5 0v-2.746h-.982v2.746a.75.75 0 0 1-1.5 0v-2.746h-.282a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .499-.707V8.25Zm4.001 3.254h-3v3.5h3v-3.5ZM17.999 9v1h2.003V9h-2.003Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSpeakerUsb',
    mixins: [icon]
};
</script>