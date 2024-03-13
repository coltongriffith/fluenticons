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
<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h6.56a6.518 6.518 0 0 1-1.078-1.5H6.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v6.826c.523.081 1.026.224 1.5.422V4.25A2.25 2.25 0 0 0 17.75 2H6.25ZM17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm3.5-5.5a.5.5 0 0 1-.5.5h-4.793l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L15.707 17H20.5a.5.5 0 0 1 .5.5ZM8.5 13.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDoorArrowLeft',
    mixins: [icon]
};
</script>