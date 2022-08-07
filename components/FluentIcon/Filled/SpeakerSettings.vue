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
<path d="M14.704 3.442c.191.226.296.512.296.808v7.25a6.502 6.502 0 0 0-3.758 7.766L7.976 16.5H4.25A2.25 2.25 0 0 1 2 14.25v-4.5A2.25 2.25 0 0 1 4.25 7.5h3.725l4.968-4.204a1.25 1.25 0 0 1 1.761.147Zm-.426 10.535a2 2 0 0 1-1.441 2.496l-.584.145a5.729 5.729 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.526a5.28 5.28 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.497l.584-.144a5.716 5.716 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.632a5.282 5.282 0 0 0-1.484-.921l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.913l.198.686ZM17.5 19c-.8 0-1.45-.671-1.45-1.5 0-.828.65-1.5 1.45-1.5.8 0 1.45.672 1.45 1.5 0 .829-.65 1.5-1.45 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSpeakerSettings',
    mixins: [icon]
};
</script>