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
<path d="M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0V2.75ZM2 6.25A2.25 2.25 0 0 1 4.25 4H10v16H4.25A2.25 2.25 0 0 1 2 17.75V6.25ZM19.25 20H13.5V4h5.75a2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 19.25 20Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSplitVertical',
    mixins: [icon]
};
</script>