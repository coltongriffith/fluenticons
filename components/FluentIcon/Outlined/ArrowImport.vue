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
<path d="M21.25 4.5a.75.75 0 0 1 .743.648L22 5.25v13.004a.75.75 0 0 1-1.493.102l-.007-.102V5.25a.75.75 0 0 1 .75-.75Zm-8.603 1.804.073-.084a.75.75 0 0 1 .977-.073l.084.073 4.996 4.997a.75.75 0 0 1 .073.976l-.072.085-4.997 5.003a.75.75 0 0 1-1.134-.976l.073-.084 3.71-3.717H2.75a.75.75 0 0 1-.743-.647L2 11.755a.75.75 0 0 1 .649-.743l.101-.007 13.694-.001L12.72 7.28a.75.75 0 0 1-.073-.976l.073-.084-.073.084Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowImport',
    mixins: [icon]
};
</script>