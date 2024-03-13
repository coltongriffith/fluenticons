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
<path d="M14.723 16.221a.75.75 0 0 0 1.061 1.06l4.997-5.003a.75.75 0 0 0 0-1.06L15.783 6.22a.75.75 0 0 0-1.061 1.06l3.72 3.72h-7.842c-1.595 0-2.81.242-3.889.764l-.246.126a6.202 6.202 0 0 0-2.576 2.576C3.28 15.606 3 16.884 3 18.6a.75.75 0 0 0 1.5 0c0-1.484.228-2.52.713-3.428a4.702 4.702 0 0 1 1.96-1.96c.837-.448 1.786-.676 3.094-.709l.334-.004h7.837l-3.715 3.721Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowForward',
    mixins: [icon]
};
</script>