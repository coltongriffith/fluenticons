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
<path d="M12 19.137A2.742 2.742 0 0 1 10 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75C2 4.784 2.784 4 3.75 4H10c.788 0 1.499.331 2 .863A2.742 2.742 0 0 1 14 4h6.25c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H14a2.742 2.742 0 0 1-2-.863ZM3.5 5.75v12.5c0 .138.112.25.25.25H10c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm9.25 11.5c0 .69.56 1.25 1.25 1.25h6.25a.25.25 0 0 0 .25-.25V5.75a.25.25 0 0 0-.25-.25H14c-.69 0-1.25.56-1.25 1.25v10.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBookOpen',
    mixins: [icon]
};
</script>