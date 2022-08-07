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
<path d="M20.252 4.003c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-7.248c-.086 0-.172-.006-.255-.018V4.022c.083-.012.169-.019.255-.019h7.248Zm-2.081 5.411a.75.75 0 0 0-1.342 0l-2.25 4.5a.75.75 0 0 0 .67 1.086h4.5a.75.75 0 0 0 .672-1.086l-2.25-4.5ZM11.004 4.001c.084 0 .166.006.246.017V19.98c-.08.011-.162.017-.246.017H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.783-1.75 1.75-1.75h7.247ZM7.171 9.414a.75.75 0 0 0-1.342 0l-2.25 4.5A.75.75 0 0 0 4.249 15h4.5a.75.75 0 0 0 .672-1.086l-2.25-4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenMirror',
    mixins: [icon]
};
</script>