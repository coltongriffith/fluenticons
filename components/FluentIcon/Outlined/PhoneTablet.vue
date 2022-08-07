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
<path d="M8.255 7c.966 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.255 20H3.75A1.75 1.75 0 0 1 2 18.25v-9.5C2 7.783 2.784 7 3.75 7h4.505Zm0 1.5H3.75a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h4.505a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25ZM6.253 16a.75.75 0 0 1 .101 1.493l-.101.007h-.5a.75.75 0 0 1-.102-1.493L5.753 16h.5ZM19.75 4a2.25 2.25 0 0 1 2.245 2.096L22 6.25v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 17H11v-1.5h8.75a.75.75 0 0 0 .743-.648l.007-.102v-8.5a.75.75 0 0 0-.648-.743L19.75 5.5H8.25a.75.75 0 0 0-.707.5h-1.53a2.25 2.25 0 0 1 2.073-1.994L8.25 4h11.5Zm-4.5 9a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneTablet',
    mixins: [icon]
};
</script>