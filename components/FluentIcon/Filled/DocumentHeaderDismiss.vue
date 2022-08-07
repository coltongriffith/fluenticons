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
<path d="M17.746 2a2.25 2.25 0 0 1 2.245 2.096l.005.154v7.248a6.499 6.499 0 0 0-7.19 10.496H6.25a2.25 2.25 0 0 1-2.244-2.096L4 19.744V4.25a2.25 2.25 0 0 1 2.095-2.245L6.25 2h11.497ZM8.504 5.004a1.5 1.5 0 0 0 0 2.999h6.998a1.5 1.5 0 0 0 0-3H8.504ZM23 17.5a5.499 5.499 0 1 1-10.997 0 5.499 5.499 0 0 1 10.997 0Zm-7.145-2.353a.5.5 0 1 0-.707.707l1.646 1.646-1.646 1.646a.5.5 0 0 0 .707.707l1.646-1.646 1.646 1.646a.5.5 0 0 0 .707-.707l-1.646-1.646 1.646-1.646a.5.5 0 0 0-.707-.707l-1.646 1.646-1.646-1.646Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentHeaderDismiss',
    mixins: [icon]
};
</script>