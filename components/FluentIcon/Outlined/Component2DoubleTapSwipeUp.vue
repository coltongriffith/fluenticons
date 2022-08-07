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
<path d="M12 16.017a.75.75 0 0 0 .743-.648l.007-.102V4.562l2.22 2.218a.75.75 0 0 0 .976.073l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.084.073-3.5 3.5a.75.75 0 0 0 .976 1.133l.084-.073 2.22-2.218v10.705c0 .414.336.75.75.75Zm0 6a7 7 0 0 0 1.75-13.78v1.564a5.5 5.5 0 1 1-3.5 0V8.237A7 7 0 0 0 12 22.017Zm0-2.5a4.5 4.5 0 0 0 1.751-8.647v1.71a3 3 0 1 1-3.5 0l-.001-1.71A4.501 4.501 0 0 0 12 19.517Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedComponent2DoubleTapSwipeUp',
    mixins: [icon]
};
</script>