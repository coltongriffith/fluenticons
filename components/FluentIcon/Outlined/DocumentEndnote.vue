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
<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v9.75a.75.75 0 0 1-.75.75H13V22h4.75A2.25 2.25 0 0 0 20 19.75V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25V12h1.5V4.25Zm8 3.75V4.56l3.94 3.94H14a.5.5 0 0 1-.5-.5ZM4.5 13.75a.75.75 0 0 1-.75.75H2.5v7h1.25a.75.75 0 0 1 0 1.5H2.5A1.5 1.5 0 0 1 1 21.5v-7A1.5 1.5 0 0 1 2.5 13h1.25a.75.75 0 0 1 .75.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9.25 14.5a.75.75 0 0 1 0-1.5h1.25a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9.25a.75.75 0 0 1 0-1.5h1.25v-7H9.25ZM6.5 16.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75ZM6.5 16a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentEndnote',
    mixins: [icon]
};
</script>