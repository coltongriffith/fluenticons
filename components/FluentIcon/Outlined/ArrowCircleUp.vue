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
<path d="m7.47 12.281.084.073a.75.75 0 0 0 .977-.073l2.72-2.72v6.69l.006.102a.75.75 0 0 0 .743.648l.102-.006a.75.75 0 0 0 .648-.744V9.56l2.72 2.722.085.072a.75.75 0 0 0 .977-1.133l-4-4.001-.085-.073a.75.75 0 0 0-.976.073l-4.001 4-.073.085a.75.75 0 0 0 .073.976Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22 12.001c0-5.523-4.476-10-10-10-5.522 0-10 4.477-10 10s4.478 10 10 10c5.524 0 10-4.477 10-10Zm-18.5 0a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowCircleUp',
    mixins: [icon]
};
</script>