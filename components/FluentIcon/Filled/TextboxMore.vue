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
<path d="M18.25 3A2.75 2.75 0 0 1 21 5.75v12.3a2.5 2.5 0 0 0-1.5.95 2.496 2.496 0 0 0-2-1c-.818 0-1.544.393-2 1a2.5 2.5 0 0 0-4.45 2h-5.3A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5ZM15 12.25a.75.75 0 0 0-.75-.75h-7.5l-.102.007A.75.75 0 0 0 6.75 13h7.5l.102-.007A.75.75 0 0 0 15 12.25Zm2.25 3.25H6.75l-.102.007A.75.75 0 0 0 6.75 17h10.5l.102-.007a.75.75 0 0 0-.102-1.493ZM18 8.25a.75.75 0 0 0-.75-.75H6.75l-.102.007A.75.75 0 0 0 6.75 9h10.5l.102-.007A.75.75 0 0 0 18 8.25ZM13.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextboxMore',
    mixins: [icon]
};
</script>