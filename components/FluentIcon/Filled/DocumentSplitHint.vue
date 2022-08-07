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
<path d="M12 8V2H6a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V10h-6a2 2 0 0 1-2-2Zm1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5Zm-8 5.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0V13.75ZM19.25 13a.75.75 0 0 1 .75.75v2.495a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75Zm-9 7.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75Zm13.75.75a.75.75 0 0 1 1.5 0V20a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H18a.5.5 0 0 0 .5-.5v-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentSplitHint',
    mixins: [icon]
};
</script>