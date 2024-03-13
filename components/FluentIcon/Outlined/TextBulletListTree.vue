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
<path d="M7.25 16a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Zm3.5.5h10.5a.75.75 0 0 1 .102 1.493L21.25 18h-10.5a.75.75 0 0 1-.102-1.493l.102-.007ZM3.25 11a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Zm3.5.5h14.5a.75.75 0 0 1 .102 1.493L21.25 13H6.75a.75.75 0 0 1-.102-1.493l.102-.007ZM3.25 6a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 3.25 6Zm3.5.5h14.5a.75.75 0 0 1 .102 1.493L21.25 8H6.75a.75.75 0 0 1-.102-1.493L6.75 6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextBulletListTree',
    mixins: [icon]
};
</script>