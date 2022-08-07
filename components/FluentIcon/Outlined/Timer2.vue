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
<path d="M12 4.998a8.5 8.5 0 0 1 8.432 9.578 3.483 3.483 0 0 0-1.453-.546 7 7 0 1 0-3.724 5.667 3.43 3.43 0 0 0-.253 1.302v.249l.009.168.005.032A8.5 8.5 0 1 1 12 4.998Zm6.503 10a2.5 2.5 0 0 1 .165 4.995l-.165.005a1 1 0 0 0-.846.464l-.02.035h2.616a.75.75 0 0 1 .744.649l.006.102a.75.75 0 0 1-.648.743l-.102.007h-3.501a.75.75 0 0 1-.744-.649l-.006-.101v-.25a2.501 2.501 0 0 1 2.336-2.495l.165-.005a1 1 0 0 0 .117-1.994l-.117-.006h-.251a.75.75 0 0 0-.744.648l-.006.102a.75.75 0 0 1-1.5 0 2.25 2.25 0 0 1 2.096-2.245l.154-.005h.251ZM12 8a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102l-.007-.102v-4.5A.75.75 0 0 1 12 8Zm7.162-2.879.08.062 1.132.986a.75.75 0 0 1-.905 1.192l-.081-.062-1.13-.986a.75.75 0 0 1 .904-1.192ZM14.25 2.487a.75.75 0 0 1 .102 1.493l-.102.007h-4.5a.75.75 0 0 1-.102-1.493l.102-.007h4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTimer2',
    mixins: [icon]
};
</script>