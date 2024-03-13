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
<path d="M12 13.999a2 2 0 1 0-.001-4 2 2 0 0 0 0 4Zm-6-2a6 6 0 1 1 11.988.366l-5.499 5.498c-.04.04-.08.082-.118.124A6 6 0 0 1 6 12Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a8 8 0 0 1 7.947 7.09c.67-.16 1.38-.107 2.024.159C21.585 6.076 17.269 2 11.999 2 6.477 2 2 6.477 2 12c0 5.184 3.946 9.447 8.998 9.949a2.117 2.117 0 0 1 .065-.543l.356-1.428A8 8 0 0 1 12 4Zm7.098 8.67-5.901 5.901a2.686 2.686 0 0 0-.707 1.248l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.685 2.685 0 0 0 1.248-.706L22.33 15.9a2.285 2.285 0 0 0-3.233-3.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTargetEdit',
    mixins: [icon]
};
</script>