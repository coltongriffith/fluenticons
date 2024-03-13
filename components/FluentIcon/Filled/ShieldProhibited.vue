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
<path d="M3.75 5a.75.75 0 0 0-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 0 0 .55 0c.144-.057.286-.114.426-.173a6.5 6.5 0 1 1 8.274-9.99c.017-.258.025-.52.025-.785V5.75a.75.75 0 0 0-.75-.75c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 0 0-.9 0C9.008 4.057 6.413 5 3.75 5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-3.309-3.252a4 4 0 0 1 5.557-5.557l-5.557 5.557Zm1.06 1.06 5.558-5.556a4 4 0 0 1-5.557 5.557Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShieldProhibited',
    mixins: [icon]
};
</script>