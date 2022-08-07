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
<path d="M9.25 5a.75.75 0 0 1 .11 1.492l-.11.008H7a3.5 3.5 0 0 0-.206 6.994L7 13.5h2.25a.75.75 0 0 1 .11 1.492L9.25 15H7a5 5 0 0 1-.25-9.994L7 5h2.25ZM17 5a5 5 0 0 1 4.43 7.322 6.496 6.496 0 0 0-1.294-.765 3.5 3.5 0 0 0-2.93-5.05L17 6.499h-2.25a.75.75 0 0 1-.11-1.492L14.75 5H17ZM7 9.25h10a.75.75 0 0 1 .102 1.493L17 10.75H7a.75.75 0 0 1-.102-1.493L7 9.25Zm16 8.25a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLinkDismiss',
    mixins: [icon]
};
</script>