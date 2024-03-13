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
<path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5V18a3.997 3.997 0 0 1-1.825 3.357l-.545-.096c-.775-.136-1.574-.563-2.175-1.172-.6-.609-.955-1.346-.955-2.089V7h1V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v13c0 1.229.582 2.326 1.387 3.142a5.8 5.8 0 0 0 1.08.858H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm1.5-2v2h3V5a1.5 1.5 0 0 0-3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShoppingBag',
    mixins: [icon]
};
</script>