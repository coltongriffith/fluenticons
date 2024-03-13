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
<path d="m9.367 3.313.86 2.027c.374.883.167 1.922-.514 2.568L7.819 9.706c.116 1.076.478 2.135 1.084 3.177a8.676 8.676 0 0 0 2.271 2.595l2.275-.759c.863-.287 1.802.043 2.33.82l1.233 1.81c.615.904.505 2.15-.258 2.917l-.818.82c-.814.818-1.977 1.114-3.052.779-2.539-.792-4.873-3.144-7.003-7.054-2.133-3.916-2.886-7.239-2.258-9.968.264-1.148 1.081-2.063 2.149-2.404l1.076-.344c1.01-.322 2.087.199 2.52 1.218Zm7.781-1.31.102-.006a.75.75 0 0 1 .744.648l.006.102v3.254h3.252a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743l-.102.007H18v3.248a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102V7.501h-3.251a.75.75 0 0 1-.744-.648l-.006-.101a.75.75 0 0 1 .648-.743l.102-.007h3.25l.001-3.255a.75.75 0 0 1 .648-.743l.102-.007-.102.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCallAdd',
    mixins: [icon]
};
</script>