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
<path d="M20.995 6.066A3.25 3.25 0 0 0 17.75 3H6.25l-.184.005a3.253 3.253 0 0 0-2.842 2.057 2.256 2.256 0 0 1 1.581.2c.315-.46.845-.762 1.445-.762h11.5l.144.006A1.75 1.75 0 0 1 19.5 6.25v5.063a6.471 6.471 0 0 1 1.5.709V6.25l-.005-.184ZM12.022 21a6.471 6.471 0 0 1-.709-1.5H6.25l-.143-.006A1.75 1.75 0 0 1 4.5 17.75V9.372a2.247 2.247 0 0 1-1.5 0v8.378l.005.184A3.25 3.25 0 0 0 6.25 21h5.772Zm-.291-6.497a6.519 6.519 0 0 1 1.076-1.5h-4.06l-.1.007a.75.75 0 0 0 .1 1.493h2.984Zm4.271-4.257a.75.75 0 0 0-.75-.75H8.748l-.102.007a.75.75 0 0 0 .102 1.493h6.504l.102-.007a.75.75 0 0 0 .648-.743ZM5 7.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2.997 6a.5.5 0 0 0 0-1h-6.001a.5.5 0 0 0 0 1h6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedChannelSubtract',
    mixins: [icon]
};
</script>