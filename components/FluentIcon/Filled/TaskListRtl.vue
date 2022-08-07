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
<path d="M21.707 3.293a1 1 0 0 0-1.414 0L19 4.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414ZM14.004 17H3l-.117.007A1 1 0 0 0 3 19h11.004l.117-.007A1 1 0 0 0 14.003 17Zm0-6H3l-.117.007A1 1 0 0 0 3 13h11.004l.117-.007A1 1 0 0 0 14.003 11Zm0-6H3l-.117.007A1 1 0 0 0 3 7h11.004l.117-.007A1 1 0 0 0 14.003 5Zm7.703 11.293a1 1 0 0 0-1.414 0L19 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Zm-1.414-6.5a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l.293.293 1.293-1.293Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTaskListRtl',
    mixins: [icon]
};
</script>