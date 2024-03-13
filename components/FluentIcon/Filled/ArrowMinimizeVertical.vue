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
<path d="M13.793 18.707a1 1 0 1 0 1.414-1.414l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 1 0 1.414 1.414l.793-.793V21a1 1 0 1 0 2 0v-3.086l.793.793ZM4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM13 3a1 1 0 1 0-2 0v3.086l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0-1.414-1.414L13 6.086V3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowMinimizeVertical',
    mixins: [icon]
};
</script>