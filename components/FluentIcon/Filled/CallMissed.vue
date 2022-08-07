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
<path d="M20.934 5.66c-1.96-1.73-5.021-2.593-9.185-2.588-4.157.006-7.126.874-8.907 2.604-.754.733-1.029 1.819-.721 2.85l.31 1.037c.288.967 1.261 1.613 2.276 1.511l2.035-.204c.873-.088 1.563-.711 1.711-1.547l.391-2.205a8.102 8.102 0 0 1 3.14-.707c1.126-.033 2.156.142 3.09.525l.632 2.355c.226.847.986 1.48 1.878 1.566l2.047.198c1.028.1 1.935-.553 2.12-1.524l.198-1.037c.195-1.028-.19-2.106-1.015-2.834ZM11.75 14a.75.75 0 0 1 .75.75v1.75h1a.75.75 0 0 1 0 1.5h-1.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 11a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCallMissed',
    mixins: [icon]
};
</script>