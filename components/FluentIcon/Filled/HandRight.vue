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
<path d="M10 4.25a1 1 0 0 0-2 0v6.748a.5.5 0 1 1-1 0v-5a1 1 0 0 0-2 0v8.756c0 2.18 1.168 4.51 1.914 5.789.556.954 1.58 1.459 2.623 1.459h2.168a3.25 3.25 0 0 0 2.907-1.797l.133-.267c.42-.842.945-1.628 1.562-2.339l2.212-2.552 2.192-1.705A.75.75 0 0 0 21 12.75c0-.485-.26-.845-.592-1.06-.296-.19-.65-.272-.962-.31-.636-.075-1.41.002-2.089.134a4.7 4.7 0 0 0-1.357.504V4.25a1 1 0 1 0-2 0v6.25a.5.5 0 1 1-1 0V2.997a1 1 0 1 0-2 0V10.5a.5.5 0 1 1-1 0V4.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHandRight',
    mixins: [icon]
};
</script>