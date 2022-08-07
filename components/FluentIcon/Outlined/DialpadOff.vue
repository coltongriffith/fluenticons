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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.72 7.782a1.25 1.25 0 1 0 1.5 1.5l3.5 3.5a1.25 1.25 0 1 0 1.498 1.498l7.5 7.5a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM18.246 14c0 .298-.104.571-.278.786l-1.758-1.758a1.25 1.25 0 0 1 2.036.972ZM13.25 9c0 .299-.105.573-.28.788L11.212 8.03A1.25 1.25 0 0 1 13.25 9ZM8.254 4c0 .3-.106.575-.282.79L6.214 3.032A1.25 1.25 0 0 1 8.254 4ZM12 17.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM7.004 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM16.996 7.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM16.996 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDialpadOff',
    mixins: [icon]
};
</script>