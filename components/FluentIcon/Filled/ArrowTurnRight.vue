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
<path d="M16.458 3.293a1 1 0 1 0-1.414 1.414L17.337 7H10.5A4.5 4.5 0 0 0 6 11.5V20a1 1 0 1 0 2 0v-8.5A2.5 2.5 0 0 1 10.5 9h7.335l-2.792 2.791a1 1 0 1 0 1.414 1.415l4.25-4.25a1 1 0 0 0 0-1.413l-4.249-4.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowTurnRight',
    mixins: [icon]
};
</script>