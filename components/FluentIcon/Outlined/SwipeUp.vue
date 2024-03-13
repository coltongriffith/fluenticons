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
<path d="M12 18.003a.75.75 0 0 0 .743-.647l.007-.102V4.56l2.22 2.216a.75.75 0 0 0 .976.073l.084-.073a.749.749 0 0 0 .073-.975l-.073-.084-3.5-3.498a.75.75 0 0 0-.976-.072l-.084.072-3.5 3.498a.749.749 0 0 0 .976 1.132l.084-.073 2.22-2.216v12.694c0 .414.336.75.75.75ZM12 22c2.761 0 5-2.237 5-4.996a4.998 4.998 0 0 0-3.25-4.68v1.651A3.499 3.499 0 0 1 12 20.501a3.499 3.499 0 0 1-1.75-6.526v-1.652A4.998 4.998 0 0 0 7 17.004 4.998 4.998 0 0 0 12 22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSwipeUp',
    mixins: [icon]
};
</script>