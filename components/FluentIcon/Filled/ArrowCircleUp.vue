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
<path d="M22 12.001c0-5.523-4.476-10-10-10-5.522 0-10 4.477-10 10s4.478 10 10 10c5.524 0 10-4.477 10-10Zm-14.53.28a.75.75 0 0 1-.073-.976l.073-.085 4-4a.75.75 0 0 1 .977-.073l.085.073 4 4.001a.75.75 0 0 1-.977 1.133l-.084-.072-2.72-2.722v6.691a.75.75 0 0 1-.649.744L12 17a.75.75 0 0 1-.743-.648l-.007-.102v-6.69l-2.72 2.72a.75.75 0 0 1-.976.073l-.084-.073Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowCircleUp',
    mixins: [icon]
};
</script>