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
<path d="M13.274 2.975a2 2 0 0 1-1.441 2.497l-.585.144a5.729 5.729 0 0 0 .007 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.485.921l.493-.518a2 2 0 0 1 2.9 0l.499.525a5.283 5.283 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.73 5.73 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.282 5.282 0 0 0-1.485-.923l-.493.519a2 2 0 0 1-2.9 0l-.499-.526c-.544.22-1.044.53-1.483.913l.198.686ZM16.497 8c-.801 0-1.45-.672-1.45-1.5 0-.829.649-1.5 1.45-1.5.8 0 1.45.671 1.45 1.5 0 .828-.65 1.5-1.45 1.5Zm0 5A6.497 6.497 0 0 0 22 9.963v10.286a1.75 1.75 0 0 1-1.75 1.75H13c-.087 0-.172-.007-.255-.019V11.81A6.473 6.473 0 0 0 16.497 13Zm-.255 4.5h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Zm-6.247-11c0-.168.007-.334.019-.499H3.75A1.75 1.75 0 0 0 2 7.751v12.495c0 .967.784 1.75 1.75 1.75H11c.083 0 .165-.006.245-.017V10.333A6.47 6.47 0 0 1 9.995 6.5Zm-.75 11 .101.007a.75.75 0 0 1 0 1.486L9.245 19H7.743l-.102-.007a.75.75 0 0 1 0-1.486l.102-.007h1.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenSettings',
    mixins: [icon]
};
</script>