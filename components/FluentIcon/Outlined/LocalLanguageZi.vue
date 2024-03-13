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
<path d="M17.25 1a.75.75 0 0 1 .75.75V3h4.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5h-9.5v.75a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 11.5 3h5V1.75a.75.75 0 0 1 .75-.75Zm-3.5 5a.75.75 0 0 0 0 1.5h4.428L16.77 8.674a.75.75 0 0 0-.27.576v.25h-4.75a.75.75 0 0 0 0 1.5h4.75v2.734a.75.75 0 0 1-.966.718l-.569-.17a.75.75 0 0 0-.43 1.436l.569.171A2.25 2.25 0 0 0 18 13.734V11h4.25a.75.75 0 0 0 0-1.5h-4.128l2.608-2.174A.75.75 0 0 0 20.25 6h-6.5Zm-5.361.477-.049-.104a.73.73 0 0 0-1.315.087l-5.964 14.5-.032.096a.754.754 0 0 0 .426.886.73.73 0 0 0 .963-.402l1.547-3.76.094.006h7.087l1.433 3.737.042.092a.73.73 0 0 0 .91.334.755.755 0 0 0 .418-.972l-5.56-14.5Zm-3.74 9.809L7.81 8.747l2.947 7.539h-6.11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLocalLanguageZi',
    mixins: [icon]
};
</script>