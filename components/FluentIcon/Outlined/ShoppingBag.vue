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
<path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShoppingBag',
    mixins: [icon]
};
</script>