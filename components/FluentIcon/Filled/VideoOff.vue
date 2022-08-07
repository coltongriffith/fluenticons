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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.567 1.567A3.25 3.25 0 0 0 2 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h7.5a3.251 3.251 0 0 0 3.168-2.521l4.801 4.802a.75.75 0 0 0 1.061-1.061L3.28 2.22ZM17 13.818l4.504 4.505a1 1 0 0 0 .496-.864V6.54a1 1 0 0 0-1.648-.762L17 8.628v5.19ZM7.682 4.5 16 12.818V7.75a3.25 3.25 0 0 0-3.25-3.25H7.682Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoOff',
    mixins: [icon]
};
</script>