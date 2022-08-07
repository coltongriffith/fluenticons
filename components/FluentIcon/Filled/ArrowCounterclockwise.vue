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
<path d="M12 4.75a7.25 7.25 0 1 1-7.201 6.406C4.867 10.568 4.44 10 3.849 10c-.515 0-.968.358-1.03.87A9.25 9.25 0 1 0 6.25 4.754V4.25a1 1 0 0 0-2.001 0v2.698A9.322 9.322 0 0 0 4.216 7h.034v.25a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-.666A7.219 7.219 0 0 1 12 4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowCounterclockwise',
    mixins: [icon]
};
</script>