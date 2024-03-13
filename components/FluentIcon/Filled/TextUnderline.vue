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
<path d="M6 4.5a1 1 0 0 1 2 0v6.001c-.003 3.463 1.32 4.999 4.247 4.999 2.928 0 4.253-1.537 4.253-5v-6a1 1 0 1 1 2 0v6c0 4.54-2.18 7-6.253 7S5.996 15.039 6 10.5v-6ZM7 21a1 1 0 1 1 0-2h10.5a1 1 0 1 1 0 2H7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextUnderline',
    mixins: [icon]
};
</script>