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
<path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7.81a6.518 6.518 0 0 0-1.5-1.078V9.5h-9.94l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 10.56v4.94h1.813c-.154.478-.255.98-.294 1.5H5a3 3 0 0 1-3-3V5Zm3-1.5A1.5 1.5 0 0 0 3.5 5v3h1.208A2.5 2.5 0 0 1 8 4.708V3.5H5Zm4.5 0v1.208A2.5 2.5 0 0 1 12.792 8H20.5V5A1.5 1.5 0 0 0 19 3.5H9.5ZM8 15.5v-4.94l-1.72 1.72a.75.75 0 0 1-1.06-1.06L6.94 9.5H3.5V14A1.5 1.5 0 0 0 5 15.5h3ZM10.5 8a1 1 0 1 0-1-1v1h1ZM8 6.996A1 1 0 1 0 7 8h1V6.996ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1H18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGiftCardAdd',
    mixins: [icon]
};
</script>