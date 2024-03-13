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
<path d="M7.5 10v12H3.75a1.75 1.75 0 0 1-1.744-1.607L2 20.25v-8.5a1.75 1.75 0 0 1 1.606-1.744L3.75 10H7.5Zm4.75 0a1.75 1.75 0 0 1 1.744 1.606l.006.144v8.5a1.75 1.75 0 0 1-1.607 1.744L12.25 22H8.5V10h3.75Zm-1.606 8.5h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.101-.007a.75.75 0 0 0-.101-1.493Zm-4.75 0h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.102-.007a.75.75 0 0 0-.102-1.493ZM19.75 2a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005H17v2h1.25a.75.75 0 0 1 .102 1.493L18.25 19H15v-1.5h.5v-2H15v-4a2.5 2.5 0 0 0-2.336-2.495L12.5 9H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2h13.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenDesktop',
    mixins: [icon]
};
</script>