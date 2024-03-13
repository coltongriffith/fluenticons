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
<path d="M16.75 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Zm5-3.5a3.5 3.5 0 1 0 0 7h10a3.5 3.5 0 1 0 0-7H7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedToggleRight',
    mixins: [icon]
};
</script>