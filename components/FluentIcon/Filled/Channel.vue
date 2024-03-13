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
<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V9.372a2.25 2.25 0 1 0 .224-4.31A3.252 3.252 0 0 1 6.25 3h11.5Zm-4.504 10.003H8.748l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.498l.102-.007a.75.75 0 0 0-.102-1.493Zm2.006-3.507H8.748l-.102.007a.75.75 0 0 0 0 1.486l.102.007h6.504l.102-.007a.75.75 0 0 0-.102-1.493ZM3.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledChannel',
    mixins: [icon]
};
</script>