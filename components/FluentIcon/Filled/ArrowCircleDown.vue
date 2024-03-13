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
<path d="M1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10Zm14.53-.28a.75.75 0 0 1 .073.976l-.072.084-4.001 4a.75.75 0 0 1-.977.073l-.084-.073-4-4.001a.75.75 0 0 1 .977-1.133l.084.073 2.72 2.722V7.748a.75.75 0 0 1 .649-.743l.101-.007a.75.75 0 0 1 .743.648l.007.102v6.69l2.72-2.72a.75.75 0 0 1 .977-.072l.084.072Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowCircleDown',
    mixins: [icon]
};
</script>