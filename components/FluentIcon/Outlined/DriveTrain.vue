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
<path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v3a2.5 2.5 0 0 0 5 0V8h2.268c.221.384.567.687.982.855v6.29c-.415.168-.76.471-.982.855H8v-.5a2.5 2.5 0 0 0-5 0v3a2.5 2.5 0 0 0 5 0v-1h2.063a2 2 0 0 0 3.874 0H16v1a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v.5h-2.268a2.007 2.007 0 0 0-.982-.855v-6.29c.415-.168.76-.471.982-.855H16v.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v1h-2.063a2 2 0 0 0-3.874 0H8v-1A2.5 2.5 0 0 0 5.5 3Zm-1 2.5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3Zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm12-9a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDriveTrain',
    mixins: [icon]
};
</script>