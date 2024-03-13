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
<path d="M15.59 2.53a2.25 2.25 0 0 0-3.181 0L2.53 12.41a2.25 2.25 0 0 0 0 3.182l1.172 1.171c.51.511 1.227.42 1.66.162a1.25 1.25 0 0 1 1.713 1.713c-.257.433-.349 1.15.162 1.66L8.41 21.47a2.25 2.25 0 0 0 3.182 0l9.878-9.878a2.25 2.25 0 0 0 0-3.182l-1.171-1.172c-.51-.51-1.228-.42-1.661-.162a1.25 1.25 0 0 1-1.713-1.713c.258-.433.349-1.15-.162-1.66L15.591 2.53Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTicketDiagonal',
    mixins: [icon]
};
</script>