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
<path d="M18.25 3A2.75 2.75 0 0 1 21 5.75v12.3a2.5 2.5 0 0 0-1.5.95 2.504 2.504 0 0 0-.141-.172c.09-.173.141-.37.141-.578V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.458a2.491 2.491 0 0 0-.158 1.5h-5.3A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5Zm-4 8.5h-7.5l-.102.007A.75.75 0 0 0 6.75 13h7.5l.102-.007a.75.75 0 0 0-.102-1.493Zm-7.5 4h10.5a.75.75 0 0 1 .102 1.493L17.25 17H6.75a.75.75 0 0 1-.102-1.493l.102-.007Zm10.5-8H6.75l-.102.007A.75.75 0 0 0 6.75 9h10.5l.102-.007A.75.75 0 0 0 17.25 7.5ZM13.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextboxMore',
    mixins: [icon]
};
</script>