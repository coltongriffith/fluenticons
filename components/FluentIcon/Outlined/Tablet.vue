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
<path d="M19.749 4a2.25 2.25 0 0 1 2.25 2.25v11.502a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.752V6.25A2.25 2.25 0 0 1 4.25 4h15.499Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.502c0 .414.336.75.75.75h15.499a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75Zm-9.499 10h3.5a.75.75 0 0 1 .102 1.493L13.75 17h-3.5a.75.75 0 0 1-.102-1.493l.102-.007h3.5-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTablet',
    mixins: [icon]
};
</script>