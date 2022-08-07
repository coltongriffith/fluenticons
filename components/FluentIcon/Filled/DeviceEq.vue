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
<path d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1ZM8 6a1 1 0 0 1 .993.883L9 7v10a1 1 0 0 1-1.993.117L7 17V7a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 .993.883L17 7v10a1 1 0 0 1-1.993.117L15 17V7a1 1 0 0 1 1-1ZM4 9a1 1 0 0 1 .993.883L5 10v4a1 1 0 0 1-1.993.117L3 14v-4a1 1 0 0 1 1-1Zm16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDeviceEq',
    mixins: [icon]
};
</script>