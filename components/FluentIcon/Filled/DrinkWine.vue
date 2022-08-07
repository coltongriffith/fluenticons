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
<path d="M6.75 2a.75.75 0 0 0-.75.75v7a5.751 5.751 0 0 0 5 5.701v5.057L8.753 20.5a.75.75 0 0 0-.006 1.5l3 .011h.005l3.5-.011a.75.75 0 0 0-.004-1.5l-2.748.009v-5.053A6.251 6.251 0 0 0 18 9.25v-6.5a.75.75 0 0 0-.75-.75H6.75Zm.75 5V3.5h9V7h-9Zm8.183 2.707a3.727 3.727 0 0 1-1.159 2.066 3.753 3.753 0 0 1-1.754.898.5.5 0 0 1-.205-.979 2.736 2.736 0 0 0 1.286-.658 2.763 2.763 0 0 0 .85-1.515.5.5 0 0 1 .982.188Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrinkWine',
    mixins: [icon]
};
</script>