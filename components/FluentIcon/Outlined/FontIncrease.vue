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
<path d="M15.195 5.754a.75.75 0 0 0 1.06.05l2.245-2.04 2.245 2.04a.75.75 0 0 0 1.01-1.109l-2.75-2.5a.75.75 0 0 0-1.01 0l-2.75 2.5a.75.75 0 0 0-.05 1.06ZM12 4a.75.75 0 0 1 .697.473l5.75 14.5a.75.75 0 0 1-1.394.553L15.258 15H8.742l-1.795 4.526a.75.75 0 1 1-1.394-.553l5.75-14.5A.75.75 0 0 1 12 4Zm-2.663 9.5h5.326L12 6.785 9.337 13.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFontIncrease',
    mixins: [icon]
};
</script>