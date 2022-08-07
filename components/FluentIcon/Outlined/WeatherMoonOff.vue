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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l8.193 8.193c-1.177 2.197-3.192 3.741-6.919 5.075a.75.75 0 0 0-.365 1.132 9.965 9.965 0 0 0 3.235 2.982c3.917 2.262 8.728 1.572 11.859-1.378l2.496 2.497a.75.75 0 0 0 1.061-1.061L3.28 2.22Zm13.881 16.002a8.505 8.505 0 0 1-12.2-.625c3.269-1.305 5.281-2.88 6.552-5.023l5.648 5.648ZM15.615 4.638a8.502 8.502 0 0 1 3.359 11.154l1.11 1.11c2.681-4.77 1.032-10.82-3.719-13.563a9.961 9.961 0 0 0-4.457-1.327.75.75 0 0 0-.769.926c.505 2.07.605 3.812.354 5.373l1.265 1.266c.455-1.76.497-3.696.065-5.955.973.17 1.915.51 2.792 1.016Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedWeatherMoonOff',
    mixins: [icon]
};
</script>