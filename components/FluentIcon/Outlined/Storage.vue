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
<path d="M5 7h14a3 3 0 0 1 2.995 2.824L22 10v4a3 3 0 0 1-2.824 2.995L19 17H5a3 3 0 0 1-2.995-2.824L2 14v-4a3 3 0 0 1 2.824-2.995L5 7h14H5Zm14 1.5H5A1.5 1.5 0 0 0 3.5 10v4A1.5 1.5 0 0 0 5 15.5h14a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 19 8.5ZM18 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStorage',
    mixins: [icon]
};
</script>