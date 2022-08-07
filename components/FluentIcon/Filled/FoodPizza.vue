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
<path d="M5.003 4.66c0-1.496 1.231-2.804 2.821-2.647A20.782 20.782 0 0 1 21.266 8.84c1.07 1.193.737 2.964-.479 3.845l-.423.307-.363-.54-.008-.011c-3.19-4.407-8.38-7.275-14.24-7.275h-.75V4.66Zm13.768 8.65.378.563-3.947 2.865-.202.15v2.102a1 1 0 0 1-2 0v-.06a.5.5 0 0 0-.996.06v1.501a1 1 0 0 1-1.995.1l-1.44 1.04c-1.489 1.074-3.57.011-3.569-1.826l.003-13.14h.75c5.354 0 10.096 2.617 13.018 6.645Zm-9.767-2.32a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 2.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFoodPizza',
    mixins: [icon]
};
</script>