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
<path d="M22.002 5.753a1.75 1.75 0 0 0-1.75-1.75h-7.248c-.086 0-.172.007-.255.019v7.228h4.83l-.89-1.002a.75.75 0 1 1 1.121-.997l2 2.25a.75.75 0 0 1 0 .997l-2 2.25a.75.75 0 1 1-1.12-.996l.89-1.002h-4.831v7.23c.083.012.169.018.255.018h7.248a1.75 1.75 0 0 0 1.75-1.75V5.754ZM11.25 11.25H6.42l.89-1.002a.75.75 0 1 0-1.12-.997l-2 2.25a.75.75 0 0 0 0 .997l2 2.25a.75.75 0 1 0 1.12-.996l-.89-1.002h4.83v7.23c-.08.01-.162.016-.246.016H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.783-1.75 1.75-1.75h7.247c.084 0 .166.006.246.017v7.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenSpan',
    mixins: [icon]
};
</script>