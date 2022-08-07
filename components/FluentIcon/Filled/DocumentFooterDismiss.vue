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
<path d="M23 6.502a5.5 5.5 0 0 1-5.499 5.501 5.5 5.5 0 0 1-5.498-5.501A5.5 5.5 0 0 1 17.5 1 5.5 5.5 0 0 1 23 6.502Zm-7.145-2.355a.5.5 0 1 0-.707.708l1.646 1.647-1.646 1.647a.5.5 0 0 0 .707.707l1.646-1.647 1.646 1.647a.5.5 0 1 0 .707-.707l-1.646-1.647 1.646-1.647a.5.5 0 0 0-.707-.708l-1.646 1.647-1.646-1.647Zm1.647 8.857c.883 0 1.726-.177 2.494-.497v7.242a2.25 2.25 0 0 1-2.096 2.246l-.154.005H6.25a2.25 2.25 0 0 1-2.244-2.097L4 19.75V4.247A2.25 2.25 0 0 1 6.095 2l.154-.005h6.567a6.482 6.482 0 0 0-1.813 4.506 6.5 6.5 0 0 0 6.499 6.502Zm-8.998 3a1.5 1.5 0 0 0 0 3.001h6.998a1.5 1.5 0 0 0 0-3H8.504Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentFooterDismiss',
    mixins: [icon]
};
</script>