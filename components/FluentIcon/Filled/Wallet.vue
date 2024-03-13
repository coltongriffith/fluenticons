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
<path d="M19.25 6.045V5.75A2.75 2.75 0 0 0 16.5 3H5.25a2.25 2.25 0 0 0-2.244 2.409A.757.757 0 0 0 3 5.5v12.25A3.25 3.25 0 0 0 6.25 21h12.5a2.75 2.75 0 0 0 2.75-2.75v-9.5a2.75 2.75 0 0 0-2.25-2.705ZM5.25 4.5H16.5c.69 0 1.25.56 1.25 1.25V6H5.25a.75.75 0 0 1 0-1.5Zm11 8.5h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWallet',
    mixins: [icon]
};
</script>