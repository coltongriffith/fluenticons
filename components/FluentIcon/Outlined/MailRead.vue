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
<path d="m3.1 8.17 8.517-5.065a.75.75 0 0 1 .662-.051l.104.051L20.9 8.17a2.25 2.25 0 0 1 1.094 1.765l.006.17v7.646a3.25 3.25 0 0 1-3.066 3.245L18.75 21H5.25a3.25 3.25 0 0 1-3.245-3.066L2 17.75v-7.647c0-.737.36-1.423.958-1.842L3.1 8.17l8.517-5.064L3.1 8.17Zm17.4 2.74-8.153 4.255a.75.75 0 0 1-.582.047l-.112-.047L3.5 10.91v6.84a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-6.84ZM12 4.623l-8.092 4.81L12 13.654l8.09-4.222L12 4.622Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMailRead',
    mixins: [icon]
};
</script>