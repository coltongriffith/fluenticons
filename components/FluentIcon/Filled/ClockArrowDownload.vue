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
<path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 .263.01.523.03.78A6.478 6.478 0 0 1 6.5 11c1.749 0 3.336.69 4.504 1.814L11 12.75v-6a.75.75 0 0 1 1.493-.102l.007.102V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.136-.012A6.472 6.472 0 0 1 13 17.5a6.478 6.478 0 0 1-1.78 4.47c.257.02.517.03.78.03 5.523 0 10-4.478 10-10ZM1 17.5a5.5 5.5 0 0 1 5-5.477v5.77l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L7 17.793v-5.77A5.5 5.5 0 1 1 1 17.5Zm2.5 3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClockArrowDownload',
    mixins: [icon]
};
</script>