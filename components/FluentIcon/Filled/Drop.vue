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
<path d="M11.47 2.22a.75.75 0 0 1 1.06 0c.403.403 1.999 2.127 3.499 4.362C17.509 8.785 19 11.635 19 14.25c0 2.524-.746 4.479-2.044 5.806C15.659 21.38 13.889 22 12 22c-1.89 0-3.659-.619-4.956-1.944C5.746 18.729 5 16.774 5 14.25c0-2.615 1.492-5.465 2.971-7.668 1.5-2.235 3.096-3.96 3.499-4.362Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrop',
    mixins: [icon]
};
</script>