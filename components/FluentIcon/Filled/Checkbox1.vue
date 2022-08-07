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
<path d="M17 2a3 3 0 0 1 3 3v8.518a1.75 1.75 0 0 0-.843.365l-2.5 2a1.75 1.75 0 0 0 1.843 2.949v.767A2.986 2.986 0 0 1 17 20H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12Zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0-1.06-1.06ZM21 15.25a.75.75 0 0 0-1.218-.586l-2.5 2a.75.75 0 1 0 .936 1.172L19.5 16.81v4.439a.75.75 0 0 0 1.5 0v-6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCheckbox1',
    mixins: [icon]
};
</script>