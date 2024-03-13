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
<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l5.905 5.905L4.81 10.33a1.25 1.25 0 0 0-.476 2.065L7.439 15.5 3 19.94V21h1.06l4.44-4.44 3.105 3.105a1.25 1.25 0 0 0 2.065-.476l1.145-3.313 5.905 5.904a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm10.355 12.476-1.252 3.626-6.705-6.705 3.626-1.252 4.331 4.331Zm6.048-3.876-3.787 1.894 1.118 1.118 3.34-1.67a2.75 2.75 0 0 0 .714-4.404l-4.825-4.826a2.75 2.75 0 0 0-4.405.715l-1.67 3.34 1.118 1.117 1.894-3.787a1.25 1.25 0 0 1 2.002-.325l4.826 4.826a1.25 1.25 0 0 1-.325 2.002Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPinOff',
    mixins: [icon]
};
</script>