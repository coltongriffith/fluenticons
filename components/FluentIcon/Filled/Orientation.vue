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
<path d="M6.75 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3.5 8.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM2 12.9c0-1.05.85-1.9 1.9-1.9h10.2c1.05 0 1.9.85 1.9 1.9v5.2a1.9 1.9 0 0 1-1.9 1.9H3.9A1.9 1.9 0 0 1 2 18.1v-5.2ZM12.25 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm-8.5-5.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5C2 4.784 2.784 4 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5Zm7.75.25a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5ZM17 16.076c0 .484.419.87.888.747a5.502 5.502 0 0 0-.373-10.73l.304-.355a.75.75 0 1 0-1.138-.976l-1.5 1.75a.75.75 0 0 0 0 .976l1.5 1.75a.75.75 0 1 0 1.138-.976l-.597-.697a4.001 4.001 0 0 1 .372 7.783c-.333.095-.594.381-.594.728Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledOrientation',
    mixins: [icon]
};
</script>