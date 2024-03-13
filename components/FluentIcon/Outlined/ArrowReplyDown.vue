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
<path d="M9.277 7.779a.75.75 0 1 0-1.061-1.06l-4.997 5.003a.75.75 0 0 0 0 1.06l4.997 4.998a.75.75 0 0 0 1.061-1.06L5.557 13h7.842c1.595 0 2.81-.242 3.889-.764l.246-.126a6.203 6.203 0 0 0 2.576-2.576c.61-1.14.89-2.418.89-4.135a.75.75 0 0 0-1.5 0c0 1.484-.228 2.52-.713 3.428a4.702 4.702 0 0 1-1.96 1.96c-.838.448-1.786.676-3.094.709l-.334.004H5.562l3.715-3.721Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowReplyDown',
    mixins: [icon]
};
</script>