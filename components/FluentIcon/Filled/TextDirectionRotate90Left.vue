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
<path d="m20.385 15.327-9-3.75a1 1 0 1 0-.77 1.846l2.385.993v3.667l-2.385.994a1 1 0 0 0 .77 1.846l9-3.75a1 1 0 0 0 0-1.846ZM15 15.25l2.4 1-2.4 1v-2ZM8 20a1 1 0 1 1-2 0V6.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L8 6.414V20Zm8-9a1 1 0 0 1-1-1V6.414l-.293.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L17 6.414V10a1 1 0 0 1-1 1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextDirectionRotate90Left',
    mixins: [icon]
};
</script>