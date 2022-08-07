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
<path d="M11.22 2.22a.75.75 0 0 1 1.042-.018l1.756 1.639a20.816 20.816 0 0 0 4.235 3.056c.432.236.727.661.797 1.148L20.4 17.5h.85a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.85l1.355-9.49c.065-.455.332-.857.726-1.093a19.934 19.934 0 0 0 3.84-2.998l1.699-1.7ZM5.115 17.5h2.131a23.313 23.313 0 0 0 3.509-7.16l.525-1.8a.75.75 0 0 1 1.44 0l.525 1.8a23.314 23.314 0 0 0 3.509 7.16h2.131l-1.32-9.243a.059.059 0 0 0-.03-.043 22.313 22.313 0 0 1-4.54-3.276l-1.227-1.145-1.187 1.187a21.433 21.433 0 0 1-4.129 3.223.026.026 0 0 0-.012.019L5.115 17.5Zm9.814 0A24.813 24.813 0 0 1 12 11.397 24.813 24.813 0 0 1 9.07 17.5h5.86Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTent',
    mixins: [icon]
};
</script>