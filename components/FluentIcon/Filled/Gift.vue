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
<path d="M11.25 13v9h-4A3.25 3.25 0 0 1 4 18.75V13h7.25ZM20 13v5.75A3.25 3.25 0 0 1 16.75 22h-4v-9H20ZM14.5 2a3.25 3.25 0 0 1 2.738 5.002L19.75 7c.69 0 1.25.466 1.25 1.042v2.916c0 .576-.56 1.042-1.25 1.042l-7-.001V7h-1.5v4.999l-7 .001C3.56 12 3 11.534 3 10.958V8.042C3 7.466 3.56 7 4.25 7l2.512.002A3.25 3.25 0 0 1 12 3.174 3.24 3.24 0 0 1 14.5 2Zm-5 1.5a1.75 1.75 0 0 0-.144 3.494L9.5 7h1.75V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5Zm5 0a1.75 1.75 0 0 0-1.75 1.75V7h1.75a1.75 1.75 0 1 0 0-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGift',
    mixins: [icon]
};
</script>