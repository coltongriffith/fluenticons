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
<path d="M7 19.25c0 .414.336.75.75.75H14c1.979 0 3.504-.823 4.52-2.074 1-1.233 1.48-2.846 1.48-4.426s-.48-3.193-1.48-4.426C17.504 7.823 15.979 7 14 7H7.56l2.47-2.47a.75.75 0 1 0-1.06-1.06L5.22 7.22a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L7.56 8.5H14c1.521 0 2.62.615 3.355 1.52.75.923 1.145 2.185 1.145 3.48s-.396 2.557-1.145 3.48c-.734.905-1.834 1.52-3.355 1.52H7.75a.75.75 0 0 0-.75.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowHookUpLeft',
    mixins: [icon]
};
</script>