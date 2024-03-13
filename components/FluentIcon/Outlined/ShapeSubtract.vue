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
<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8a3.23 3.23 0 0 0 .555 1.817c.258.382.596.707.989.95a3.23 3.23 0 0 0 1.409.47h.006a3.3 3.3 0 0 0 .291.013H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25a3.23 3.23 0 0 0-.555-1.817 3.268 3.268 0 0 0-.989-.95 3.23 3.23 0 0 0-1.409-.47h-.006A3.29 3.29 0 0 0 13.25 2h-8Zm.69 1.5L3.5 5.94v-.69c0-.966.784-1.75 1.75-1.75h.69ZM3.5 8.06 8.06 3.5h1.88L3.5 9.94V8.06Zm8.56-4.56h1.19c.206 0 .404.036.588.101l-4.04 4.04a3.257 3.257 0 0 0-2.156 2.157l-4.04 4.04a1.748 1.748 0 0 1-.102-.588v-1.19l8.56-8.56ZM14.9 4.662c.065.184.101.382.101.588v1.19L13.94 7.5h-1.88L14.9 4.662ZM7.5 12.061v1.879L6.44 15H5.25c-.206 0-.404-.036-.588-.101L7.5 12.06ZM9 10.75C9 9.784 9.784 9 10.75 9h8c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75v-8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShapeSubtract',
    mixins: [icon]
};
</script>