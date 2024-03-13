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
<path d="M7 4.75A.75.75 0 0 1 7.75 4H14c1.979 0 3.504.823 4.52 2.074C19.52 7.307 20 8.92 20 10.5s-.48 3.193-1.48 4.426C17.504 16.177 15.979 17 14 17H7.56l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 1 1 1.06 1.06L7.56 15.5H14c1.521 0 2.62-.615 3.355-1.52.75-.923 1.145-2.185 1.145-3.48s-.396-2.557-1.145-3.48C16.621 6.114 15.521 5.5 14 5.5H7.75A.75.75 0 0 1 7 4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowHookDownLeft',
    mixins: [icon]
};
</script>