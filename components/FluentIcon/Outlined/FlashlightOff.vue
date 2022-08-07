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
<path d="M9.53 14.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.28 2.22a.75.75 0 1 0-1.06 1.06l6.03 6.03v1.38l-5.22 5.219a2.25 2.25 0 0 0 0 3.182L4.91 20.97a2.25 2.25 0 0 0 3.182 0l5.22-5.22h1.378l6.03 6.03a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM9 12.06 11.94 15l-4.91 4.909a.75.75 0 0 1-1.06 0L4.09 18.03a.75.75 0 0 1 0-1.06L9 12.06Zm8.844 2.035 1.565-1.565a.75.75 0 0 0 0-1.06L12.53 4.59a.75.75 0 0 0-1.06 0L9.904 6.155l-1.06-1.06 1.564-1.565a2.25 2.25 0 0 1 3.182 0l6.878 6.879a2.25 2.25 0 0 1 0 3.182l-1.564 1.565-1.06-1.061Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFlashlightOff',
    mixins: [icon]
};
</script>