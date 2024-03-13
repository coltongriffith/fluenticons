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
<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v7.5A3.25 3.25 0 0 0 5.25 18H11v-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75V9h17v2.55a2.75 2.75 0 0 1 1.5 2.438V7.25A3.25 3.25 0 0 0 18.75 4H5.25ZM20.5 7.5h-17v-.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v.25ZM14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14v1Zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4v-1ZM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCreditCardToolbox',
    mixins: [icon]
};
</script>