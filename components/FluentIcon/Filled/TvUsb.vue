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
<path d="M4.75 3A2.75 2.75 0 0 0 2 5.75v8.5A2.75 2.75 0 0 0 4.75 17h9.75v-3c0-.818.393-1.544 1-2v-1A2.5 2.5 0 0 1 18 8.5h3c.356 0 .694.074 1 .208V5.75A2.75 2.75 0 0 0 19.25 3H4.75Zm1 15.5h9.001c.046.095.098.187.157.276l.8 1.224H5.75a.75.75 0 0 1 0-1.5ZM17.5 20l-1.337-2.045a1 1 0 0 1-.163-.547V14a1 1 0 0 1 1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v3.44a1 1 0 0 1-.167.554L21.5 20v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm1-8.5V13h2v-1.5h-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTvUsb',
    mixins: [icon]
};
</script>