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
<path d="M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM14.5 6a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 6H14.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 13a6.478 6.478 0 0 0 4.499-1.809v4.56a2.25 2.25 0 0 1-2.096 2.246l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.493L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3h7.772A6.5 6.5 0 0 0 17.5 13Zm-3.502 5.002h-4l.001 2.498h4l-.001-2.498Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDesktopArrowRight',
    mixins: [icon]
};
</script>