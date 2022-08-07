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
<path d="M2 7.75A2.75 2.75 0 0 1 4.75 5h12.5A2.75 2.75 0 0 1 20 7.75v2.471a3.964 3.964 0 0 1-.803-.486 4.636 4.636 0 0 1-.745-.725 1.755 1.755 0 0 0-2.903 0 4.636 4.636 0 0 1-.745.725c-.538.415-1.232.76-2.054.76-.97 0-1.755.786-1.755 1.755V15H4.75A2.75 2.75 0 0 1 2 12.25v-4.5Zm13.573 1.228c.002-.001.002-.002 0 0Zm3.01 1.553a4.958 4.958 0 0 1-.97-.964.749.749 0 0 0-1.226 0c-.269.366-.612.688-.97.964-.312.24-.684.474-1.11.652-.459.191-.98.317-1.557.317a.75.75 0 0 0-.75.75V15c0 1.643.438 2.947 1.299 3.98.846 1.016 2.044 1.7 3.438 2.222a.75.75 0 0 0 .526 0c1.394-.522 2.592-1.206 3.438-2.222C21.562 17.947 22 16.643 22 15v-2.75a.75.75 0 0 0-.75-.75 4.025 4.025 0 0 1-1.557-.317 4.935 4.935 0 0 1-1.11-.652Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShieldBadge',
    mixins: [icon]
};
</script>