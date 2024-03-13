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
<path d="m16.5 7.811-8.69 8.69h8.44a.25.25 0 0 0 .25-.25V7.81Zm-.634-1.487c.788-.788 2.134-.23 2.134.884v9.042A1.75 1.75 0 0 1 16.25 18H7.207c-1.114 0-1.671-1.346-.884-2.133l9.543-9.543Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCaretDownLeft',
    mixins: [icon]
};
</script>