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
<path d="M16.5 8a4.25 4.25 0 0 0 0 8.5h.5v4.75a.75.75 0 0 0 1.5 0V9.5h1v11.75a.75.75 0 0 0 1.5 0V9.5h.25a.75.75 0 0 0 0-1.5H16.5Zm0 1.5h.5V15h-.5a2.75 2.75 0 1 1 0-5.5ZM2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75ZM2.75 10a.75.75 0 0 0 0 1.5h8.553c.076-.53.23-1.034.452-1.5H2.75ZM12.027 15H2.75a.75.75 0 0 0 0 1.5h10.667a5.278 5.278 0 0 1-1.39-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextParagraph',
    mixins: [icon]
};
</script>