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
<path d="M12 2v6a2 2 0 0 0 2 2h6v10.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.25A2.75 2.75 0 0 0 11.25 14v-1a1.5 1.5 0 0 0-1.5-1.5H4.5c-.175 0-.344.03-.5.085V3.5A1.5 1.5 0 0 1 5.5 2H12Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM3.75 13.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75V15h.5A2.25 2.25 0 0 1 13 17.25v3.5A2.25 2.25 0 0 1 10.75 23h-7.5A2.25 2.25 0 0 1 1 20.75v-3.5A2.25 2.25 0 0 1 3.25 15h.5v-1.75Zm5 .75h-3.5v1h3.5v-1Zm-5.5 2.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentBriefcase',
    mixins: [icon]
};
</script>