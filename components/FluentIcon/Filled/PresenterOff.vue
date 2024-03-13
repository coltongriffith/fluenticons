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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.854 5.855A1.75 1.75 0 0 0 7 10.75V12h3.94l.996.997H3.75c-.709 0-1.022.893-.469 1.336L8 18.11v1.645a2.25 2.25 0 0 0 2.25 2.25h3.495a2.25 2.25 0 0 0 2.25-2.25V18.11l.586-.468 4.138 4.139a.75.75 0 0 0 1.061-1.061L3.28 2.22ZM16.179 12.997l2.758 2.758 1.776-1.422c.553-.444.24-1.336-.469-1.336H16.18ZM12.182 9l3 3h1.813v-1.25l-.006-.143A1.75 1.75 0 0 0 15.245 9h-3.063ZM12 8c-.344 0-.674-.057-.982-.164L9.164 5.982A3 3 0 1 1 12 8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPresenterOff',
    mixins: [icon]
};
</script>