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
<path d="M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0V2.75ZM4.25 4A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20H10v-1.5H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75H10V4H4.25Zm15 14.5H13.5V20h5.75a2.25 2.25 0 0 0 2.25-2.25V6.25A2.25 2.25 0 0 0 19.25 4H13.5v1.5h5.75a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSplitVertical',
    mixins: [icon]
};
</script>