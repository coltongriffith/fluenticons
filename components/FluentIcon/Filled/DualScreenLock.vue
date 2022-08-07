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
<path d="M17 5h-.5A1.5 1.5 0 0 0 15 6.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 22.5 5H22V4a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 1 1 2 0v1h-2V4Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.502-2.997h1.051c-.032.16-.049.327-.049.497v5a2.5 2.5 0 0 0 2.5 2.5h5.495v6.248a1.75 1.75 0 0 1-1.75 1.75h-7.247c-.087 0-.172-.006-.256-.018V6.022c.083-.012.169-.019.256-.019Zm3.24 11.497h-1.5l-.101.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486l-.101-.007ZM10.999 6c.083 0 .165.006.245.017V21.98a1.77 1.77 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.967.784-1.75 1.75-1.75h7.248ZM9.243 17.5H7.74l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.502l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenLock',
    mixins: [icon]
};
</script>