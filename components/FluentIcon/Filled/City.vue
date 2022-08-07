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
<path d="M12.75 2.747a.75.75 0 0 0-1.5 0V4h-2A1.75 1.75 0 0 0 7.5 5.75v2.155c1.52-.138 3 1.036 3 2.743V21.25c0 .026 0 .052-.002.078V22h3v-1.25h.002v-7.5a2.75 2.75 0 0 1 2.75-2.75h.25V5.75A1.75 1.75 0 0 0 14.75 4h-2V2.747Z" :fill="fill" :fill-opacity="opacity" />
<path d="M14.498 22h4.252a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v7.5h-.002V22ZM9.5 20.75h-.002V22H5.25a1.75 1.75 0 0 1-1.75-1.75v-7.96c0-.59.297-1.14.79-1.463l2.5-1.641c1.163-.765 2.71.07 2.71 1.462V20.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCity',
    mixins: [icon]
};
</script>