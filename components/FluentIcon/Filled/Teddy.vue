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
<path d="M3.207 10.271a4 4 0 0 1 6.251-4.964c-2.833.703-5.144 2.55-6.251 4.964Zm11.335-4.963a4 4 0 0 1 6.251 4.964c-1.107-2.415-3.418-4.262-6.251-4.964ZM6.628 19.313C4.72 17.938 3.5 15.844 3.5 13.5 3.5 9.358 7.306 6 12 6s8.5 3.358 8.5 7.5c0 2.344-1.22 4.438-3.128 5.813a5.496 5.496 0 0 0-1.707-2.914 5.502 5.502 0 0 0-9.037 2.914Zm8.37-2.168a4.487 4.487 0 0 0-1.542-.904c-.161.436-.752.759-1.456.759s-1.294-.323-1.456-.76a4.505 4.505 0 0 0-3.003 3.647A9.315 9.315 0 0 0 12 21a9.316 9.316 0 0 0 4.459-1.113 4.485 4.485 0 0 0-1.46-2.742Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTeddy',
    mixins: [icon]
};
</script>