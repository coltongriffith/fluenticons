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
<path d="M12 5.997a.75.75 0 0 1 .743.647l.007.102V19.44l2.22-2.216a.75.75 0 0 1 .976-.073l.084.073c.267.266.29.682.073.975l-.073.084-3.5 3.497a.75.75 0 0 1-.976.073l-.084-.073-3.5-3.497a.749.749 0 0 1 .976-1.132l.084.073 2.22 2.216V6.746a.75.75 0 0 1 .75-.75ZM12 2c2.761 0 5 2.237 5 4.996a4.998 4.998 0 0 1-3.25 4.68v-1.651A3.499 3.499 0 0 0 12 3.499a3.499 3.499 0 0 0-1.75 6.526v1.652A4.998 4.998 0 0 1 7 6.996 4.998 4.998 0 0 1 12 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSwipeDown',
    mixins: [icon]
};
</script>