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
<path d="M14.704 3.441c.191.226.296.512.296.808V19.75a1.25 1.25 0 0 1-2.058.954l-4.967-4.206H4.25A2.25 2.25 0 0 1 2 14.248v-4.5a2.25 2.25 0 0 1 2.25-2.25h3.725l4.968-4.204a1.25 1.25 0 0 1 1.761.147ZM13.5 4.788l-4.975 4.21H4.25a.75.75 0 0 0-.75.75v4.5c0 .415.336.75.75.75h4.275l4.975 4.213V4.788Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSpeaker0',
    mixins: [icon]
};
</script>