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
<path d="M15.457 6.457a1 1 0 0 1-1.414 0L13 5.414V8.25a1 1 0 1 1-2 0V5.414L9.957 6.457a1 1 0 0 1-1.414-1.414l2.75-2.75a1 1 0 0 1 1.414 0l2.75 2.75a1 1 0 0 1 0 1.414ZM6.457 14.043a1 1 0 1 1-1.414 1.414l-2.75-2.75a1 1 0 0 1 0-1.414l2.75-2.75a1 1 0 0 1 1.414 1.414L5.414 11H8.25a1 1 0 1 1 0 2H5.414l1.043 1.043ZM18.957 15.457a1 1 0 0 1-1.414-1.414L18.586 13H15.75a1 1 0 1 1 0-2h2.836l-1.043-1.043a1 1 0 0 1 1.414-1.414l2.75 2.75a1 1 0 0 1 0 1.414l-2.75 2.75ZM11 18.586V15.75a1 1 0 1 1 2 0v2.836l1.043-1.043a1 1 0 0 1 1.414 1.414l-2.75 2.75a1 1 0 0 1-1.414 0l-2.75-2.75a1 1 0 1 1 1.414-1.414L11 18.586Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowMove',
    mixins: [icon]
};
</script>