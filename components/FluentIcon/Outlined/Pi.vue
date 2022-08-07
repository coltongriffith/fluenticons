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
<path d="M2.5 6.75A2.75 2.75 0 0 1 5.25 4h15a.75.75 0 0 1 0 1.5H17v11.453a1.75 1.75 0 0 0 2.339 1.648l.159-.057a.75.75 0 0 1 .504 1.412l-.159.057c-2.116.756-4.343-.813-4.343-3.06V5.5H9.494a69.393 69.393 0 0 1-.247 4.534c-.252 2.862-.758 6.498-1.789 9.462a.75.75 0 0 1-1.416-.492c.969-2.787 1.462-6.275 1.71-9.1A67.903 67.903 0 0 0 7.995 5.5H5.25C4.56 5.5 4 6.06 4 6.75v.5a.75.75 0 0 1-1.5 0v-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPi',
    mixins: [icon]
};
</script>