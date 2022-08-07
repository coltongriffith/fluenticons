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
<path d="M21 5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75ZM5.75 4.5h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25Zm1 3h10.5a.75.75 0 0 1 .102 1.493L17.25 9H6.75a.75.75 0 0 1-.102-1.493L6.75 7.5Zm10.5 3H6.75l-.102.007A.75.75 0 0 0 6.75 12h10.5l.102-.007a.75.75 0 0 0-.102-1.493Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextboxAlignTop',
    mixins: [icon]
};
</script>