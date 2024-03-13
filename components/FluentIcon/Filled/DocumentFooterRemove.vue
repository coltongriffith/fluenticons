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
<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-7.976-1.769a.5.5 0 0 1 .707-.707l1.77 1.77 1.771-1.77a.5.5 0 0 1 .713.005.5.5 0 0 1-.006.702l-1.77 1.77 1.768 1.769a.5.5 0 0 1 .018.688l-.005.005a.5.5 0 0 1-.72.014L17.5 7.208l-1.766 1.767a.5.5 0 1 1-.707-.708l1.766-1.766-1.769-1.77ZM8.5 15.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.5 13a6.48 6.48 0 0 0 2.495-.496v7.24a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-11.5A2.25 2.25 0 0 1 4 19.898l-.005-.154V4.246A2.25 2.25 0 0 1 6.091 2l.154-.005h6.569A6.5 6.5 0 0 0 17.5 13Zm-8.75 1A1.75 1.75 0 0 0 7 15.75v1.5c0 .967.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 17 17.25v-1.5A1.75 1.75 0 0 0 15.25 14h-6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentFooterRemove',
    mixins: [icon]
};
</script>