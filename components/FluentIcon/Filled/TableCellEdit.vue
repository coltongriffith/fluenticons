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
<path d="M5.25 6.5A2.25 2.25 0 0 0 3 8.75v4.5a2.25 2.25 0 0 0 2.25 2.25H8v-9H5.25Zm7.238 8.365a3.686 3.686 0 0 0-.508.635H9.5v-9h5v6.353l-2.012 2.012ZM20.715 8c.053 0 .106.001.158.004A2.25 2.25 0 0 0 18.75 6.5H16v4.853l2.39-2.39A3.28 3.28 0 0 1 20.714 8h.002Zm0 1h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.684 2.684 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.684 2.684 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 20.715 9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableCellEdit',
    mixins: [icon]
};
</script>