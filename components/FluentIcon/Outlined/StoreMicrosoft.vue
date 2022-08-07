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
<path d="M11.5 9.5V13H8V9.5h3.5ZM11.5 17.5V14H8v3.5h3.5ZM16 9.5V13h-3.5V9.5H16ZM16 17.5V14h-3.5v3.5H16Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8 6V3.75C8 2.784 8.784 2 9.75 2h4.5c.966 0 1.75.784 1.75 1.75V6h5.25a.75.75 0 0 1 .75.75v11.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25V6.75A.75.75 0 0 1 2.75 6H8Zm1.5-2.25V6h5V3.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25Zm-6 14.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V7.5h-17v10.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStoreMicrosoft',
    mixins: [icon]
};
</script>