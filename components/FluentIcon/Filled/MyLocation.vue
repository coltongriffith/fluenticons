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
<path d="M12 2a1 1 0 0 1 .993.883L13 3v1.314a7.754 7.754 0 0 1 6.686 6.687L21 11a1 1 0 0 1 .117 1.993L21 13h-1.314A7.754 7.754 0 0 1 13 19.686V21a1 1 0 0 1-1.993.117L11 21v-1.314A7.754 7.754 0 0 1 4.315 13H3a1 1 0 0 1-.117-1.993L3 11h1.314A7.754 7.754 0 0 1 11 4.315L11 3a1 1 0 0 1 1-1Zm0 4.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMyLocation',
    mixins: [icon]
};
</script>