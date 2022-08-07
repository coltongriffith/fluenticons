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
<path d="M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h5.8c.053-.26.147-.511.28-.744l.433-.756H5.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v7.754c.06.08.116.166.166.254L21 15.589V5.25A2.25 2.25 0 0 0 18.75 3H5.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 12a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 1 0 0 1.5h4.466A2.496 2.496 0 0 1 17.5 12ZM14.337 15H11.25a.75.75 0 1 0 0 1.5h2.229l.858-1.5ZM7.75 9.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11.25 7.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM7.75 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.75 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.108 13.053a1.498 1.498 0 0 1 1.69.702l4.004 6.998c.205.36.246.768.145 1.139a1.493 1.493 0 0 1-1.444 1.107h-8.006c-.413 0-.787-.167-1.058-.44a1.495 1.495 0 0 1-.24-1.806l4.002-6.999a1.49 1.49 0 0 1 .907-.701Zm.888 2.447a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-.496 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextBulletListSquareWarning',
    mixins: [icon]
};
</script>