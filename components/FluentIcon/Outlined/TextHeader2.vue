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
<path d="M4.5 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V12.5H11v5.75a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0V11H4.5V5.75Zm10.921 2.085c.23-.46.913-1.335 2.58-1.335.842 0 1.459.26 1.86.639.397.376.64.921.64 1.611 0 1.963-1.3 3.068-2.958 4.343l-.212.163C15.825 14.409 14 15.806 14 18.25a.75.75 0 0 0 .75.75h6.5a.75.75 0 0 0 0-1.5h-5.66c.315-1.252 1.427-2.11 2.866-3.218C20.05 13.057 22 11.537 22 8.75c0-1.06-.383-2.015-1.11-2.702C20.166 5.364 19.158 5 18 5c-2.333 0-3.484 1.291-3.92 2.165a.75.75 0 0 0 1.341.67Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextHeader2',
    mixins: [icon]
};
</script>