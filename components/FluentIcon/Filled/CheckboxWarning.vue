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
<path d="M17 2a3 3 0 0 1 3 3v7.903l-.26-.52c-.921-1.844-3.553-1.844-4.474 0L11.46 20H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12Zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0-1.06-1.06Zm.691 5.86-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0Zm1.843 2.666v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0Zm-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCheckboxWarning',
    mixins: [icon]
};
</script>