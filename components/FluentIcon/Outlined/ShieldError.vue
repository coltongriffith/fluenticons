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
<path d="M12.45 2.15C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0ZM12 3.678c-2.42 1.71-4.923 2.648-7.5 2.8V11c0 4.256 2.453 7.379 7.5 9.442 5.047-2.063 7.5-5.186 7.5-9.442V6.478c-2.577-.152-5.08-1.09-7.5-2.8ZM12 16a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-8.996a.75.75 0 0 1 .743.648l.007.102v6.498a.75.75 0 0 1-1.493.102l-.007-.102V7.754a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShieldError',
    mixins: [icon]
};
</script>