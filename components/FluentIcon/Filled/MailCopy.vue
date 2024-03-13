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
<path d="M3 7.511a3.247 3.247 0 0 0-1.5 2.739v6c0 2.9 2.35 5.25 5.25 5.25h9c1.15 0 2.161-.598 2.739-1.5H6.75A3.75 3.75 0 0 1 3 16.25V7.511Zm1 .599v7.64a3.25 3.25 0 0 0 3.066 3.245L7.25 19h11.5a3.25 3.25 0 0 0 3.245-3.066L22 15.75V8.11l-8.65 4.554a.75.75 0 0 1-.7 0L4 8.11ZM18.75 4H7.25a3.251 3.251 0 0 0-3.155 2.466L13 11.152l8.905-4.686a3.252 3.252 0 0 0-2.966-2.46L18.75 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMailCopy',
    mixins: [icon]
};
</script>