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
<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v5.772A6.47 6.47 0 0 1 6.5 11c1.748 0 3.334.69 4.502 1.812A.793.793 0 0 1 11 12.75v-6a.75.75 0 0 1 1.5 0V12h3.75a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.136-.012A6.472 6.472 0 0 1 13 17.5a6.47 6.47 0 0 1-1.022 3.5h5.772A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .834.255 1.608.691 2.248l5.557-5.557A4 4 0 0 0 2.5 17.5Zm4 4a4 4 0 0 0 3.309-6.248l-5.557 5.557c.64.436 1.414.691 2.248.691Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShiftsProhibited',
    mixins: [icon]
};
</script>