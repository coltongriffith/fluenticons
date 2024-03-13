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
<path d="M6.064 5.244a.75.75 0 1 0-1.128-.988l-1.75 2a.75.75 0 0 0 0 .988l1.75 2a.75.75 0 0 0 1.128-.988L5.403 7.5h2.862a.75.75 0 0 0 0-1.5H5.403l.661-.756Zm11.957-1.058a.75.75 0 0 0-.07 1.058l.66.756h-2.86a.75.75 0 0 0 0 1.5h2.86l-.66.756a.75.75 0 0 0 1.128.988l1.75-2a.75.75 0 0 0 0-.988l-1.75-2a.75.75 0 0 0-1.058-.07ZM5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11H5.75ZM6 15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowAutofitContent',
    mixins: [icon]
};
</script>