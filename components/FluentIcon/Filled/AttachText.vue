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
<path d="M7 3a5 5 0 0 1 4.995 4.783L12 8v11a3 3 0 0 1-5.995.176L6 19V9a1 1 0 0 1 1.993-.117L8 9v10a1 1 0 0 0 1.993.117L10 19V8a3 3 0 0 0-5.995-.176L4 8v9a1 1 0 0 1-1.993.117L2 17V8a5 5 0 0 1 5-5Zm8 14h2a1 1 0 0 1 .117 1.993L17 19h-2a1 1 0 0 1-.117-1.993L15 17h2-2Zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 15H15a1 1 0 0 1-.117-1.993L15 13h5.5H15Zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 11H15a1 1 0 0 1-.117-1.993L15 9h5.5H15Zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 7H15a1 1 0 0 1-.117-1.993L15 5h5.5H15Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAttachText',
    mixins: [icon]
};
</script>