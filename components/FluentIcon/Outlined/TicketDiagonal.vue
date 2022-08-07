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
<path d="M14.53 3.59a.75.75 0 0 0-1.06 0l-9.88 9.88a.75.75 0 0 0 0 1.06l1.069 1.068a2.75 2.75 0 0 1 3.742 3.742L9.47 20.41a.75.75 0 0 0 1.061 0l9.879-9.879a.75.75 0 0 0 0-1.06L19.34 8.4a2.75 2.75 0 0 1-3.742-3.742L14.53 3.59ZM12.41 2.53a2.25 2.25 0 0 1 3.182 0l1.171 1.172c.511.51.42 1.227.162 1.66a1.25 1.25 0 0 0 1.713 1.713c.433-.257 1.15-.349 1.66.162L21.47 8.41a2.25 2.25 0 0 1 0 3.182l-9.878 9.878a2.25 2.25 0 0 1-3.182 0l-1.172-1.171c-.51-.51-.42-1.228-.162-1.66a1.25 1.25 0 0 0-1.713-1.713c-.433.257-1.15.348-1.66-.163L2.53 15.591a2.25 2.25 0 0 1 0-3.182L12.41 2.53Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTicketDiagonal',
    mixins: [icon]
};
</script>