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
<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h6.868A4.31 4.31 0 0 1 12 19v-.5a2.5 2.5 0 0 1 2.5-2.5h.95a3.75 3.75 0 1 1 6.291-3H22V7.25A3.25 3.25 0 0 0 18.75 4H5.25ZM21.5 17a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4-3.14 0-5-2.029-5-4v-.5a1.5 1.5 0 0 1 1.5-1.5h7ZM18 10.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShareScreenPerson',
    mixins: [icon]
};
</script>