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
<path d="M7 3.5v6.238c0 .375-.094.744-.273 1.074L5.54 13h8.922l-1.188-2.188A2.25 2.25 0 0 1 13 9.738V3.5h1A.75.75 0 0 0 14 2H6a.75.75 0 0 0 0 1.5h1Zm8.275 11H4.725l-1.582 2.915A1.75 1.75 0 0 0 4.68 20h6.734l.106-.423c.162-.648.497-1.24.97-1.712l2.988-2.989-.204-.376Zm3.825-1.83-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBeakerEdit',
    mixins: [icon]
};
</script>