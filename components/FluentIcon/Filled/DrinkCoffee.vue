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
<path d="M3.941 5C2.87 5 2 5.87 2 6.941V12a8 8 0 0 0 15.911 1.197h.738a3.349 3.349 0 0 0 0-6.697h-.7c-.2-.86-.97-1.5-1.89-1.5H3.94ZM18 8h.649a1.849 1.849 0 1 1 0 3.697H18V8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrinkCoffee',
    mixins: [icon]
};
</script>