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
<path d="M13.72 9.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.75 2A4.25 4.25 0 0 1 22 6.25v1C22 15.396 15.396 22 7.25 22h-1A4.25 4.25 0 0 1 2 17.75v-1C2 8.604 8.604 2 16.75 2h1Zm2.75 4.25a2.75 2.75 0 0 0-2.75-2.75h-1c-.403 0-.802.018-1.196.053l4.893 4.893c.035-.394.053-.793.053-1.196v-1Zm-.347 4.024-6.427-6.427a13.27 13.27 0 0 0-9.902 9.977l6.352 6.352a13.269 13.269 0 0 0 9.977-9.902Zm-16.61 5.391c-.028.358-.043.72-.043 1.085v1a2.75 2.75 0 0 0 2.75 2.75h1c.365 0 .727-.015 1.085-.044l-4.791-4.791Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSportAmericanFootball',
    mixins: [icon]
};
</script>