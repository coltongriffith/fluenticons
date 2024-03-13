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
<path d="M10 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 18 10.25V11c-.319 0-.637.11-.896.329l-.107.1c-.164.17-.33.323-.496.457L16.5 10.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h9.888a6.024 6.024 0 0 0 1.54 1.5H4.25A2.25 2.25 0 0 1 2 19.75v-9.5A2.25 2.25 0 0 1 4.25 8H6V6a4 4 0 0 1 4-4Zm8.284 10.122c.992 1.036 2.091 1.545 3.316 1.545.193 0 .355.143.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.253 0c-2.476-.86-3.785-2.592-3.87-5.13L14 16.585v-2.5c0-.23.18-.417.4-.417 1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0ZM10 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-10A2.5 2.5 0 0 0 7.5 6v2h5V6A2.5 2.5 0 0 0 10 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLockShield',
    mixins: [icon]
};
</script>