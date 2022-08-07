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
<path d="M6.75 18a.75.75 0 0 0 .743-.648l.007-.102V4.561l2.22 2.22a.75.75 0 0 0 .976.072l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.084.073-3.5 3.5a.75.75 0 0 0 .976 1.133l.084-.073L6 4.561V17.25c0 .414.336.75.75.75Zm10.498 0a.75.75 0 0 0 .743-.648l.007-.102V4.561l2.22 2.22a.75.75 0 0 0 .976.072l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.085.073-3.5 3.5a.75.75 0 0 0 .977 1.133l.084-.073 2.22-2.219V17.25c0 .414.335.75.75.75ZM6.75 22a4.75 4.75 0 0 0 1.751-9.167v1.679a3.25 3.25 0 1 1-3.502 0v-1.68A4.752 4.752 0 0 0 6.75 22Zm10.498 0a4.75 4.75 0 0 0 1.75-9.167L19 14.512a3.25 3.25 0 1 1-3.502 0v-1.68A4.752 4.752 0 0 0 17.248 22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDoubleSwipeUp',
    mixins: [icon]
};
</script>