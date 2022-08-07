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
<path d="M5.75 3a.75.75 0 0 0-.743.648L5 3.75v16.5a.75.75 0 0 0 1.493.102l.007-.102V3.75A.75.75 0 0 0 5.75 3Zm13.03.22a.75.75 0 0 0-.976-.073l-.084.073-8.25 8.25a.75.75 0 0 0-.073.976l.073.084 8.25 8.25a.75.75 0 0 0 1.133-.976l-.073-.084L11.06 12l7.72-7.72a.75.75 0 0 0 0-1.06Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowPrevious',
    mixins: [icon]
};
</script>