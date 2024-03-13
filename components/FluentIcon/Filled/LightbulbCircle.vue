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
<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm2.481 15H9.519l.103.454.043.152.057.143c.288.646.902 1.05 1.587 1.05h1.382l.156-.009.15-.023.147-.035a1.727 1.727 0 0 0 1.233-1.276l.104-.456ZM12 5.202a5 5 0 0 0-5 5l.008.271.02.256.034.252a4.995 4.995 0 0 0 1.64 2.978l.154.129.321 1.412h5.644l.32-1.41.163-.136a4.995 4.995 0 0 0 1.69-3.497l.006-.255a5 5 0 0 0-5-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLightbulbCircle',
    mixins: [icon]
};
</script>