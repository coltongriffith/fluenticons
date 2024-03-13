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
<path d="M11.75 5a5.752 5.752 0 0 0-5.663 4.75H6a4 4 0 0 0 0 8h11.5a4 4 0 0 0 0-8h-.087A5.752 5.752 0 0 0 11.75 5Zm-2 4h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5ZM5 13.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCloudWords',
    mixins: [icon]
};
</script>