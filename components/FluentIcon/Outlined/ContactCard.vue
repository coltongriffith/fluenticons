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
<path d="M19.75 4A2.25 2.25 0 0 1 22 6.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4h15.5Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75Zm-10 7a.75.75 0 0 1 .75.75v.493l-.008.108c-.163 1.113-1.094 1.65-2.492 1.65s-2.33-.537-2.492-1.65l-.008-.11v-.491a.75.75 0 0 1 .75-.75h3.5Zm3.502.496h4.498a.75.75 0 0 1 .102 1.493l-.102.007h-4.498a.75.75 0 0 1-.102-1.493l.102-.007h4.498-4.498ZM8 8.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.252.998h4.498a.75.75 0 0 1 .102 1.493L17.75 11h-4.498a.75.75 0 0 1-.102-1.493l.102-.007h4.498-4.498Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedContactCard',
    mixins: [icon]
};
</script>