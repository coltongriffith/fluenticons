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
<path d="M4.21 10.733a.75.75 0 0 0 1.086 1.034l5.954-6.251V20.25a.75.75 0 0 0 1.5 0V5.516l5.955 6.251a.75.75 0 0 0 1.086-1.034l-7.067-7.42a.995.995 0 0 0-.58-.3.754.754 0 0 0-.29.001.995.995 0 0 0-.578.3L4.21 10.733Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowUp',
    mixins: [icon]
};
</script>