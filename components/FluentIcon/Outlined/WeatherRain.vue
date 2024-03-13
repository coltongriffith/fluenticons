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
<path d="M12 4c3.169 0 4.966 2.098 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.687 3.687 0 0 1-3.693 3.683h-.582l-1.582 2.634a.75.75 0 0 1-1.344-.658l.045-.092 1.149-1.884h-2.136l-1.582 2.634a.75.75 0 0 1-1.344-.658l.045-.092 1.149-1.884H8.988L7.406 18.63a.75.75 0 0 1-1.343-.658l.044-.092 1.149-1.884h-.563A3.687 3.687 0 0 1 3 12.313a3.687 3.687 0 0 1 3.692-3.682h.08C7.036 6.08 8.832 4 12 4Zm0 1.498c-2.071 0-3.877 1.634-3.877 3.89 0 .357-.319.637-.684.637h-.69c-1.261 0-2.284 1.002-2.284 2.237s1.023 2.236 2.284 2.236h10.503c1.26 0 2.283-1.001 2.283-2.236 0-1.235-1.023-2.237-2.284-2.237h-.69c-.365 0-.684-.28-.684-.637 0-2.285-1.806-3.89-3.877-3.89Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedWeatherRain',
    mixins: [icon]
};
</script>