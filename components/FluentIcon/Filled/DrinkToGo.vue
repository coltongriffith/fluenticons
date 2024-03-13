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
<path d="M15.72 2.22a.75.75 0 0 1 1.06 1.06L15.56 4.5h2.19c.317 0 .6.2.706.498l1.25 3.5A.75.75 0 0 1 19 9.5h-1.044l-1.588 10.05c-.21 1.465-1.459 2.45-2.97 2.45h-2.796c-1.51 0-2.76-.985-2.968-2.44L6.044 9.5H5a.75.75 0 0 1-.706-1.002l1.25-3.5A.75.75 0 0 1 6.25 4.5h7.188l2.282-2.28ZM17.222 6H6.779l-.715 2h11.872l-.714-2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrinkToGo',
    mixins: [icon]
};
</script>