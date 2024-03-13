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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.478 2A6.47 6.47 0 0 0 11 17.5c0 1.644.61 3.145 1.617 4.29-.802.141-1.675.21-2.617.21-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.305-2.843v-.907A2.25 2.25 0 0 1 4.254 14h7.768Zm3.071.966-.07.058-.057.07a.5.5 0 0 0 0 .568l.058.069 1.77 1.77-1.768 1.766-.057.07a.5.5 0 0 0 0 .568l.058.07.069.057a.5.5 0 0 0 .568 0l.07-.058 1.766-1.767 1.77 1.77.069.058a.5.5 0 0 0 .568 0l.07-.058.058-.07a.5.5 0 0 0 0-.568l-.058-.07-1.77-1.768 1.772-1.77.058-.07a.5.5 0 0 0 0-.568l-.058-.069-.069-.058a.5.5 0 0 0-.569 0l-.069.058-1.771 1.77-1.77-1.77-.07-.058a.5.5 0 0 0-.492-.043l-.076.043ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonDelete',
    mixins: [icon]
};
</script>