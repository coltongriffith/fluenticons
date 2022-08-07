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
<path d="M19.59 5.081a.746.746 0 0 0-.809.084.751.751 0 0 0-.249.367c-.69 2.051-2.057 3.409-3.168 4.075a.75.75 0 0 0 .772 1.286c.774-.464 1.623-1.18 2.364-2.146v9.503a.75.75 0 0 0 1.5 0V5.772a.75.75 0 0 0-.41-.69ZM3.5 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V12.5H10v5.75a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0V11H3.5V5.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextHeader1',
    mixins: [icon]
};
</script>