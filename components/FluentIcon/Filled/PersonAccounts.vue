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
<path d="M4.249 13.995h5.876c-.349.423-.574.952-.62 1.53l-.009.22v4.5c0 .665.236 1.275.63 1.75l-.13.001c-3.42 0-5.943-1.072-7.486-3.236A2.75 2.75 0 0 1 2 17.164v-.92a2.249 2.249 0 0 1 2.249-2.249Zm10.497-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3Zm2.75 1.5h-2.5v1h2.5v-1ZM9.997 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonAccounts',
    mixins: [icon]
};
</script>