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
<path d="M4.5 17.5a.75.75 0 0 1-.659-1.108l6.25-11.5a.75.75 0 0 1 1.409.358v11.5a.75.75 0 0 1-.75.75H4.5ZM20.145 17.133a.75.75 0 0 1-.645.367h-6.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 1.409-.358l6.25 11.5a.75.75 0 0 1-.014.741ZM14 8.201V16h4.239L14 8.2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFlipHorizontal',
    mixins: [icon]
};
</script>