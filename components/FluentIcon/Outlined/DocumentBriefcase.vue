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
<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v9.75a.75.75 0 0 1-.75.75H14V22h3.75A2.25 2.25 0 0 0 20 19.75V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25v7.335c.156-.055.325-.085.5-.085h1V4.25ZM17.44 8.5H14a.5.5 0 0 1-.5-.5V4.56l3.94 3.94Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3.75 13.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75V15h.5A2.25 2.25 0 0 1 13 17.25v3.5A2.25 2.25 0 0 1 10.75 23h-7.5A2.25 2.25 0 0 1 1 20.75v-3.5A2.25 2.25 0 0 1 3.25 15h.5v-1.75Zm5 .75h-3.5v1h3.5v-1Zm-5.5 2.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentBriefcase',
    mixins: [icon]
};
</script>