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
<path d="M20 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM16 9c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995s-1-.446-1-.995V9.995c0-.55.448-.995 1-.995Zm-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm-4 3c.552 0 1 .445 1 .994v4.012c0 .549-.448.994-1 .994s-1-.445-1-.994v-4.012c0-.549.448-.994 1-.994Zm-4 3c.552 0 1 .44 1 .984v1.032A.992.992 0 0 1 4 21c-.552 0-1-.44-1-.984v-1.032A.992.992 0 0 1 4 18ZM20 6a1 1 0 0 1 1 1v9.996a1 1 0 0 1-2 0V7A1 1 0 0 1 20 6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCellularDataCellularUnavailable',
    mixins: [icon]
};
</script>