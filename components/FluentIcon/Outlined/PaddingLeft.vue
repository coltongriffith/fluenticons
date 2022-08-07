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
<path d="M2.75 4.5a.75.75 0 0 0-.75.75v.867a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75Zm0 3.467a.75.75 0 0 0-.75.75v1.733a.75.75 0 0 0 1.5 0V8.717a.75.75 0 0 0-.75-.75Zm0 4.333a.75.75 0 0 0-.75.75v1.733a.75.75 0 0 0 1.5 0V13.05a.75.75 0 0 0-.75-.75Zm0 4.333a.75.75 0 0 0-.75.75v.867a.75.75 0 0 0 1.5 0v-.867a.75.75 0 0 0-.75-.75ZM21.25 4.5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-.75-.75ZM5.22 12.28a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L7.56 11h10.69a.75.75 0 0 1 0 1.5H7.56l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPaddingLeft',
    mixins: [icon]
};
</script>