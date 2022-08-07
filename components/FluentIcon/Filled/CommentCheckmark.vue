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
<path d="M12.023 2.999A6.5 6.5 0 0 0 22 11.189L22 14.75A3.25 3.25 0 0 1 18.75 18h-5.785l-5.387 3.817A1 1 0 0 1 6 21.002V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3l6.773-.001ZM17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2.646 3.146L16.055 8.24 14.9 6.7a.5.5 0 0 0-.8.6l1.5 2a.5.5 0 0 0 .754.054l4.5-4.5a.5.5 0 0 0-.707-.708Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommentCheckmark',
    mixins: [icon]
};
</script>