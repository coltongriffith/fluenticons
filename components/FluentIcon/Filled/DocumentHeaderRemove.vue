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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-2.476 3.024a.5.5 0 0 0 0 .708l1.77 1.77-1.767 1.766a.5.5 0 0 0 .707.707l1.766-1.767 1.77 1.77a.5.5 0 0 0 .707-.708l-1.769-1.769 1.772-1.77a.5.5 0 1 0-.708-.707l-1.77 1.77-1.77-1.77a.5.5 0 0 0-.708 0ZM8.75 6.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-6.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.745 1.996a2.25 2.25 0 0 1 2.245 2.096l.005.154v7.25a6.5 6.5 0 0 0-7.191 10.498H6.245A2.25 2.25 0 0 1 4 19.898l-.005-.154V4.246a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5ZM7 6.75v1.5C7 9.217 7.784 10 8.75 10h6.5A1.75 1.75 0 0 0 17 8.25v-1.5A1.75 1.75 0 0 0 15.25 5h-6.5A1.75 1.75 0 0 0 7 6.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentHeaderRemove',
    mixins: [icon]
};
</script>