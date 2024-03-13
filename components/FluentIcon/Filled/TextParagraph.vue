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
<path d="M12.25 12.25A4.25 4.25 0 0 1 16.5 8h4.75a.75.75 0 0 1 0 1.5H21v11.75a.75.75 0 0 1-1.5 0V9.5h-1v11.75a.75.75 0 0 1-1.5 0V16.5h-.5a4.25 4.25 0 0 1-4.25-4.25ZM3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM11.755 10H3a1 1 0 1 0 0 2h8.256c.033-.713.209-1.389.5-2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.027 15H3a1 1 0 1 0 0 2h11.261a5.273 5.273 0 0 1-2.234-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextParagraph',
    mixins: [icon]
};
</script>