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
<path d="M3.25 17.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm3.5.5h14.5a.75.75 0 0 1 .102 1.494l-.102.006H6.75a.75.75 0 0 1-.102-1.493L6.75 18h14.5-14.5Zm-3.5-7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm3.5.5h14.5a.75.75 0 0 1 .102 1.494L21.25 13H6.75a.75.75 0 0 1-.102-1.493l.102-.007h14.5-14.5Zm-3.5-7A1.25 1.25 0 1 1 3.25 7a1.25 1.25 0 0 1 0-2.499Zm3.5.5h14.5a.75.75 0 0 1 .102 1.494l-.102.006H6.75a.75.75 0 0 1-.102-1.493L6.75 5h14.5-14.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextBulletListLtr',
    mixins: [icon]
};
</script>