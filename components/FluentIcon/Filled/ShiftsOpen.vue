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
<path d="M15 3a1 1 0 1 0 0 2h2.5A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 0 0 2h2.5a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3H15ZM5 6.5A1.5 1.5 0 0 1 6.5 5H9a1 1 0 1 0 0-2H6.5A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21H9a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5v-11Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.5 7a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h4.497a1 1 0 0 0 0-2H12.5V7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShiftsOpen',
    mixins: [icon]
};
</script>