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
<path d="M21.907 5.622c.062.208.093.424.093.641V17.74a2.25 2.25 0 0 1-2.891 2.156l-5.514-1.64a4.002 4.002 0 0 1-7.59-1.556L6 16.5l-.001-.5-2.39-.711A2.25 2.25 0 0 1 2 13.131V10.87a2.25 2.25 0 0 1 1.61-2.156l15.5-4.606a2.25 2.25 0 0 1 2.797 1.515ZM7.499 16.445l.001.054a2.5 2.5 0 0 0 4.624 1.321l-4.625-1.375Zm12.037-10.9-15.5 4.605a.75.75 0 0 0-.536.72v2.261a.75.75 0 0 0 .536.72l15.5 4.607a.75.75 0 0 0 .964-.72V6.264a.75.75 0 0 0-.964-.719Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMegaphone',
    mixins: [icon]
};
</script>