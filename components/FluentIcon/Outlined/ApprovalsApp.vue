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
<path d="M11.78 1.72a.75.75 0 1 0-1.06 1.06L11.94 4a9 9 0 1 0 9.023 9.82.75.75 0 0 0-1.494-.135A7.5 7.5 0 1 1 11.94 5.5l-1.22 1.22a.75.75 0 0 0 1.061 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.784 10.22a.75.75 0 0 1 0 1.06l-4.504 4.504a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.469 3.973-3.973a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedApprovalsApp',
    mixins: [icon]
};
</script>