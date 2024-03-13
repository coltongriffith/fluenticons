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
<path d="M8 3.75V6H2.75a.75.75 0 0 0-.75.75v11.5A2.75 2.75 0 0 0 4.75 21h14.5A2.75 2.75 0 0 0 22 18.25V6.75a.75.75 0 0 0-.75-.75H16V3.75A1.75 1.75 0 0 0 14.25 2h-4.5A1.75 1.75 0 0 0 8 3.75Zm1.75-.25h4.5a.25.25 0 0 1 .25.25V6h-5V3.75a.25.25 0 0 1 .25-.25ZM8 13V9.5h3.5V13H8Zm0 4.5V14h3.5v3.5H8Zm8-4.5h-3.5V9.5H16V13Zm-3.5 4.5V14H16v3.5h-3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStoreMicrosoft',
    mixins: [icon]
};
</script>