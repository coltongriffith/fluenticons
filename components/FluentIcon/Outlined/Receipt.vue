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
<path d="M4 6.25A2.25 2.25 0 0 1 6.25 4h8.5A2.25 2.25 0 0 1 17 6.25V14h3.5v3.25a3.25 3.25 0 0 1-3.25 3.25h-10A3.25 3.25 0 0 1 4 17.25v-11Zm13 9.25V19h.25A1.75 1.75 0 0 0 19 17.25V15.5h-2ZM15.5 19V6.25a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v11c0 .966.784 1.75 1.75 1.75h8.25ZM7 8.75A.75.75 0 0 1 7.75 8h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 7 8.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedReceipt',
    mixins: [icon]
};
</script>