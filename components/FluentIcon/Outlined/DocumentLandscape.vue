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
<path d="M4 5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-6H16a2 2 0 0 1-2-2V5.5H4Zm15.379 5L15.5 6.622V10a.5.5 0 0 0 .5.5h3.379Zm-3.793-5.914 5.828 5.829c.026.026.046.058.07.085.064.071.127.141.18.219.027.04.045.086.068.128.04.071.084.141.116.216.082.197.123.409.138.624.003.047.014.093.014.141V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10.172a2 2 0 0 1 1.414.586Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentLandscape',
    mixins: [icon]
};
</script>