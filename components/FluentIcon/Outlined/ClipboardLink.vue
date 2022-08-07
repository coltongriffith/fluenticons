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
<path d="M15.986 4a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22H11a4.986 4.986 0 0 1-.771-1.5H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1h3.5c.778 0 1.464-.395 1.868-.996h1.884V5.5h.248a.75.75 0 0 1 .75.75V14H20V6.25A2.25 2.25 0 0 0 17.75 4h-1.764Zm-5.736-.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19 15a4 4 0 0 1 .2 7.995L19 23a.75.75 0 0 1-.102-1.493L19 21.5a2.5 2.5 0 0 0 .164-4.995L19 16.5a.75.75 0 0 1-.102-1.493L19 15ZM15 15a.75.75 0 0 1 .102 1.493L15 16.5a2.5 2.5 0 0 0-.164 4.995L15 21.5a.75.75 0 0 1 .102 1.493L15 23a4 4 0 0 1-.2-7.995L15 15Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.25 18.25h3.5a.75.75 0 0 1 .102 1.493l-.102.007h-3.5a.75.75 0 0 1-.102-1.493l.102-.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedClipboardLink',
    mixins: [icon]
};
</script>