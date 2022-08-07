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
<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25V14h-5a5 5 0 0 0-4 8H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 19 16.5l.164.005A2.5 2.5 0 0 1 19 21.5l-.102.007A.75.75 0 0 0 19 23l.2-.005A4 4 0 0 0 23 19ZM15.75 15.75A.75.75 0 0 0 15 15l-.2.005A4 4 0 0 0 15 23l.102-.007A.75.75 0 0 0 15 21.5l-.164-.005A2.5 2.5 0 0 1 15 16.5l.102-.007a.75.75 0 0 0 .648-.743Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18.75 18.25h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardLink',
    mixins: [icon]
};
</script>