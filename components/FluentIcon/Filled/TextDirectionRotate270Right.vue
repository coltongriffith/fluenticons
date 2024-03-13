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
<path d="M19.707 5.293a1 1 0 1 1-1.414 1.414L18 6.414V20a1 1 0 1 1-2 0V6.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2ZM3.615 17.173l9 3.75a1 1 0 1 0 .77-1.846L11 18.084v-3.667l2.385-.994a1 1 0 0 0-.77-1.846l-9 3.75a1 1 0 0 0 0 1.846ZM9 17.25l-2.4-1 2.4-1v2Zm1.707-10.543a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L7 6.414V10a1 1 0 1 0 2 0V6.414l.293.293a1 1 0 0 0 1.414 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextDirectionRotate270Right',
    mixins: [icon]
};
</script>