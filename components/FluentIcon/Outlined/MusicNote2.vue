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
<path d="M19.698 2.148A.75.75 0 0 1 20 2.75v13.5a.764.764 0 0 1-.004.079 3.5 3.5 0 1 1-1.496-2.702V7.758l-8.5 2.55v7.942a.756.756 0 0 1-.004.079A3.5 3.5 0 1 1 8.5 15.627V5.75a.75.75 0 0 1 .534-.718l10-3a.75.75 0 0 1 .664.116ZM10 8.742l8.5-2.55V3.758L10 6.308v2.434ZM6.5 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMusicNote2',
    mixins: [icon]
};
</script>