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
<path d="M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5h15.495Zm-2.495 9.5H6.75l-.102.007a.75.75 0 0 0 0 1.486L6.75 16h10.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007ZM16.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.995 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.995 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledKeyboard',
    mixins: [icon]
};
</script>