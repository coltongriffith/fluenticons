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
<path d="M16 3.75a.75.75 0 0 0-.75-.75h-6.5l-.102.007A.75.75 0 0 0 8 3.75V7H6.25A3.25 3.25 0 0 0 3 10.25v6.5A3.25 3.25 0 0 0 6.25 20h11.5A3.25 3.25 0 0 0 21 16.75v-6.5A3.25 3.25 0 0 0 17.75 7H16V3.75Zm-6.5.75h5V7h-5V4.5Zm2 11.25V14H9.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5H13v1.75a.75.75 0 0 1-1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBriefcaseMedical',
    mixins: [icon]
};
</script>