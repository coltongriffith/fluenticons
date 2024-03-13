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
<path d="M12 2v6a2 2 0 0 0 2 2h6v10.5a1.5 1.5 0 0 1-1.5 1.5H13v-8a2 2 0 0 0-2-2H4V3.5A1.5 1.5 0 0 1 5.5 2H12Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM7.25 17.5a.75.75 0 0 0-1.5 0V21a.75.75 0 0 0 1.5 0v-3.5ZM7.25 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM4.5 13.75a.75.75 0 0 1-.75.75H2.5v7h1.25a.75.75 0 0 1 0 1.5H2.5A1.5 1.5 0 0 1 1 21.5v-7A1.5 1.5 0 0 1 2.5 13h1.25a.75.75 0 0 1 .75.75ZM9.25 14.5a.75.75 0 0 1 0-1.5h1.25a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9.25a.75.75 0 0 1 0-1.5h1.25v-7H9.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentEndnote',
    mixins: [icon]
};
</script>