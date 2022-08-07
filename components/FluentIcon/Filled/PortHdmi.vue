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
<path d="m21.41 11.41-2.82-2.82A2.007 2.007 0 0 0 17.17 8H6.83a2.006 2.006 0 0 0-1.42.59l-2.82 2.82A2.007 2.007 0 0 0 2 12.83V14a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2v-1.17a2.006 2.006 0 0 0-.59-1.42ZM17 12a.755.755 0 0 1-.75.75h-8.5a.75.75 0 1 1 0-1.5h8.5A.756.756 0 0 1 17 12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPortHdmi',
    mixins: [icon]
};
</script>