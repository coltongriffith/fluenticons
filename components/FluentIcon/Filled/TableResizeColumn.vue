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
<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-.25v-6.647l1.058-1.19a1.75 1.75 0 0 0 0-2.326L17.5 9.647V3h.25ZM14.087 15.558a1.75 1.75 0 0 1-.514-1.808h-3.146A1.75 1.75 0 0 1 8 15.832V21h8v-5.168a1.75 1.75 0 0 1-1.913-.274ZM14.087 8.442A1.75 1.75 0 0 1 16 8.168V3H8v5.168a1.75 1.75 0 0 1 2.428 2.082h3.144a1.75 1.75 0 0 1 .515-1.808ZM6.5 9.647V3h-.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h.25v-6.647l-1.058-1.19a1.75 1.75 0 0 1 0-2.326L6.5 9.647Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.58 11.25H8.42l.89-1.002a.75.75 0 0 0-1.12-.996l-2 2.25a.75.75 0 0 0 0 .996l2 2.25a.75.75 0 1 0 1.12-.996l-.89-1.002h7.16l-.89 1.002a.75.75 0 1 0 1.12.996l2-2.25.011-.012a.747.747 0 0 0-.013-.987l-1.997-2.247a.75.75 0 0 0-1.121.996l.89 1.002Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableResizeColumn',
    mixins: [icon]
};
</script>