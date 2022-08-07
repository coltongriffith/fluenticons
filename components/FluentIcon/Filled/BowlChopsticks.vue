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
<path d="M6.145 2.368a.75.75 0 0 0-1.29.764L7.739 8h1.744L6.145 2.368Zm4 0L13.483 8h-1.744L8.855 3.132a.75.75 0 0 1 1.29-.764ZM2.765 9A.765.765 0 0 0 2 9.765V12h20V9.765A.765.765 0 0 0 21.235 9H2.765Zm-.653 4.5a10.004 10.004 0 0 0 4.618 7H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-2.98a10.005 10.005 0 0 0 4.618-7H2.112Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBowlChopsticks',
    mixins: [icon]
};
</script>