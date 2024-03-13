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
<path d="M11.998 5.001a8.5 8.5 0 0 1 8.433 9.574 3.487 3.487 0 0 0-1.928-.578h-.251l-.188.006a3.258 3.258 0 0 0-3.063 3.245l.006.143a1.75 1.75 0 0 0 .827 1.347l-.057.067A3.475 3.475 0 0 0 15 20.999v.248l.01.17.006.032a8.5 8.5 0 1 1-3.019-16.448Zm6.505 9.996a2.5 2.5 0 0 1 .164 4.995l-.164.006a1 1 0 0 0-.846.464l-.02.035h2.616a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743l-.102.007h-3.502a.75.75 0 0 1-.743-.648l-.007-.102V21a2.501 2.501 0 0 1 2.337-2.496l.164-.005a1 1 0 0 0 .118-1.994l-.117-.007h-.251a.75.75 0 0 0-.744.649l-.007.102a.75.75 0 0 1-1.5 0 2.25 2.25 0 0 1 2.097-2.246l.154-.005h.251Zm-6.505-6.996a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102a.75.75 0 0 0-.743-.648Zm7.17-2.878.081.062 1.15.999a.75.75 0 0 1-.903 1.193l-.082-.061-1.149-.999a.75.75 0 0 1 .903-1.194Zm-4.92-2.622a.75.75 0 0 1 .102 1.493l-.102.007h-4.5a.75.75 0 0 1-.102-1.493l.102-.007h4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTimer2',
    mixins: [icon]
};
</script>