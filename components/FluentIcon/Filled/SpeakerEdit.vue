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
<path d="M14.999 4.252v11.103l-2.51 2.51a3.684 3.684 0 0 0-.939 1.597l-3.123-2.776a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.246V9.75A2.25 2.25 0 0 1 4.25 7.5h3.68a.75.75 0 0 0 .497-.19l4.492-3.992c.806-.716 2.08-.144 2.08.934Zm3.392 7.71c.182-.181.38-.337.59-.467a6.96 6.96 0 0 0-.823-2.822.75.75 0 0 0-1.319.714c.42.777.66 1.666.66 2.614 0 .318-.027.63-.08.933l.972-.971Zm2.05-.95a3.294 3.294 0 0 1 1.53.237 9.95 9.95 0 0 0-1.932-5.194.75.75 0 0 0-1.205.893 8.448 8.448 0 0 1 1.608 4.064Zm-1.343 1.658-5.901 5.901a2.685 2.685 0 0 0-.707 1.247l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.685 2.685 0 0 0 1.248-.706l5.902-5.901a2.285 2.285 0 1 0-3.233-3.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSpeakerEdit',
    mixins: [icon]
};
</script>