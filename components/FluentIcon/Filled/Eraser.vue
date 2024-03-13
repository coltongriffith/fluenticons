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
<path d="m15.87 2.669 4.968 4.968a2.25 2.25 0 0 1 0 3.182l-8.681 8.68 6.097.001a.75.75 0 0 1 .744.648l.006.102a.75.75 0 0 1-.648.743l-.102.007-8.41.001a2.244 2.244 0 0 1-1.714-.655l-4.968-4.969a2.25 2.25 0 0 1 0-3.182l9.526-9.526a2.25 2.25 0 0 1 3.182 0Zm-4.172 15.09-5.955-5.956-1.506 1.467a.75.75 0 0 0 0 1.06l4.945 4.946a.75.75 0 0 0 1.06-.016l1.456-1.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEraser',
    mixins: [icon]
};
</script>